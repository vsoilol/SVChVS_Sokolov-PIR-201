(() => {
  "use strict";

  function lazyLoad() {
    const imageSpinnerHtml = `<div class="spinner spinner_image">\n\t\t\t\t\t\t\t\t\t </div>`;
    var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function (
        entries,
        observer
      ) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.style.visibility = "hidden";
            const container = lazyImage.closest("[data-img-container]");
            container.insertAdjacentHTML("beforeend", imageSpinnerHtml);
            lazyImage.onload = function () {
              const spinner = container.querySelector(".spinner");
              container.removeChild(spinner);
              lazyImage.style.visibility = "visible";
            };
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazy");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
      lazyImages.forEach(function (lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  }

  const imagesBlock = document.querySelector("#imagesData");
  const paginationBlock = document.querySelector(".pagination");
  const spinnerHtml = `<div class="spinner-container">\n\t\t\t\t\t\t\t\t<div class="spinner">\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>`;

  const pageNumbers = (total, max, current) => {
    const half = Math.floor(max / 2);
    let to = max;
    if (current + half >= total) to = total;
    else if (current > half) to = current + half;
    let from = Math.max(to - max, 0);
    return Array.from(
      {
        length: Math.min(total, max),
      },
      (_, i) => i + 1 + from
    );
  };

  class PaginationButton {
    #pages;
    #totalPages;
    #maxPagesVisible = 10;
    #currentPage = 1;
    #currentPageBtn = null;
    #buttons = new Map();
    #paginationButtonContainer = document.createElement("div");
    #onChangeFunction = null;
    constructor(totalPages, maxPagesVisible = 10, currentPage = 1) {
      this.#totalPages = totalPages;
      this.#maxPagesVisible = maxPagesVisible;
      this.#currentPage = currentPage;
      this.#pages = pageNumbers(
        this.#totalPages,
        this.#maxPagesVisible,
        this.#currentPage
      );
      this.#paginationButtonContainer.className = "pagination-buttons";
    }
    #disabled = {
      start: () => 1 === this.#pages[0],
      prev: () =>
        1 === this.#currentPage || this.#currentPage > this.#totalPages,
      end: () => this.#pages.slice(-1)[0] === this.#totalPages,
      next: () => this.#currentPage >= this.#totalPages,
    };
    #update(newPageNumber = this.#currentPage) {
      this.#currentPage = newPageNumber;
      this.#pages = pageNumbers(
        this.#totalPages,
        this.#maxPagesVisible,
        this.#currentPage
      );
      this.#buttons.forEach((updateButton, btn) => updateButton(btn));
    }
    #createAndSetupButton(label = "", cls = "", disabled = false, handleClick) {
      const buttonElement = document.createElement("button");
      buttonElement.textContent = label;
      buttonElement.className = `page-btn ${cls}`;
      buttonElement.disabled = disabled;
      buttonElement.addEventListener("click", (e) => {
        handleClick(e);
        this.#update();
        this.#paginationButtonContainer.value = this.#currentPage;
        let currentPageBtn = this.#currentPageBtn;
        this.#paginationButtonContainer.dispatchEvent(
          new CustomEvent("change", {
            detail: {
              currentPageBtn,
            },
          })
        );
      });
      return buttonElement;
    }
    #onPageButtonUpdate = (index) => (btn) => {
      btn.textContent = this.#pages[index];
      if (this.#pages[index] === this.#currentPage) {
        this.#currentPageBtn.classList.remove("active");
        btn.classList.add("active");
        this.#currentPageBtn = btn;
        this.#currentPageBtn.focus();
      }
    };
    generatePaginationButtonContainer(
      totalPages,
      currentPage,
      maxPagesVisible
    ) {
      this.#totalPages = totalPages ? totalPages : this.#totalPages;
      this.#maxPagesVisible = maxPagesVisible
        ? maxPagesVisible
        : this.#maxPagesVisible;
      this.#currentPage = currentPage ? currentPage : this.#currentPage;
      this.#pages = pageNumbers(
        this.#totalPages,
        this.#maxPagesVisible,
        this.#currentPage
      );
      this.#buttons = new Map();
      this.#paginationButtonContainer.innerHTML = "";
      this.#paginationButtonContainer.className = "pagination-buttons";
      const frag = document.createDocumentFragment();
      this.#buttons.set(
        this.#createAndSetupButton(
          "start",
          "start-page",
          this.#disabled.start(),
          () => (this.#currentPage = 1)
        ),
        (btn) => (btn.disabled = this.#disabled.start())
      );
      this.#buttons.set(
        this.#createAndSetupButton(
          "prev",
          "prev-page",
          this.#disabled.prev(),
          () => (this.#currentPage -= 1)
        ),
        (btn) => (btn.disabled = this.#disabled.prev())
      );
      this.#pages.map((pageNumber, index) => {
        const isCurrentPage = this.#currentPage === pageNumber;
        const button = this.#createAndSetupButton(
          pageNumber,
          isCurrentPage ? "active" : "",
          false,
          (e) => (this.#currentPage = Number(e.currentTarget.textContent))
        );
        if (isCurrentPage) this.#currentPageBtn = button;
        this.#buttons.set(button, this.#onPageButtonUpdate(index));
      });
      this.#buttons.set(
        this.#createAndSetupButton(
          "next",
          "next-page",
          this.#disabled.next(),
          () => (this.#currentPage += 1)
        ),
        (btn) => (btn.disabled = this.#disabled.next())
      );
      this.#buttons.set(
        this.#createAndSetupButton(
          "end",
          "end-page",
          this.#disabled.end(),
          () => (this.#currentPage = this.#totalPages)
        ),
        (btn) => (btn.disabled = this.#disabled.end())
      );
      this.#buttons.forEach((_, btn) => frag.appendChild(btn));
      this.#paginationButtonContainer.appendChild(frag);
    }
    render() {
      this.generatePaginationButtonContainer();
      const container = document.querySelector(".pagination");
      if (document.querySelector(".pagination-buttons"))
        container.innerHTML = "";
      container.appendChild(this.#paginationButtonContainer);
    }
    onChange = (handler) => {
      if (null !== this.#onChangeFunction)
        this.#paginationButtonContainer.removeEventListener(
          "change",
          this.#onChangeFunction
        );
      this.#paginationButtonContainer.addEventListener("change", handler);
      this.#onChangeFunction = handler;
    };
  }

  var pages = 0;
  var paginationButtons = new PaginationButton(3, 5);
  paginationButtons.render();

  const paginationScrenSize = window.matchMedia("(max-width: 400px)");

  if (paginationScrenSize.matches)
    paginationButtons.generatePaginationButtonContainer(null, null, 1);

  window.matchMedia("(max-width: 400px)").addEventListener("change", (e) => {
    if (e.matches)
      paginationButtons.generatePaginationButtonContainer(null, null, 1);
    else paginationButtons.generatePaginationButtonContainer(null, null, 5);
  });

  async function getImages(search, page = 1, isPaginationUpdate = true) {
    imagesBlock.innerHTML = spinnerHtml;
    paginationBlock.style.display = "none";
    const method =
      search && search.length > 0
        ? "flickr.photos.search"
        : "flickr.photos.getRecent";

    // lcp --proxyUrl https://www.flickr.com

    const localUrl = "http://localhost:8010";
    const server = `${localUrl}/proxy/services/rest/?method=${method}&`;
    const params = `api_key=bd3ed38c503f674c4cd0ab70f1e29807&text=${search}&format=json&nojsoncallback=true&per_page=12&page=${page}`;
    const response = await fetch(server + params, {
      method: "GET",
    });
    if (response.ok) {
      const responseResult = await response.json();
      checkPagination(isPaginationUpdate, responseResult.photos.pages, search);
      setData(responseResult);
    } else
      imagesBlock.innerHTML = `<div class="images-data-items">\n\t\t\t\t\t\t\t\t\t\t<span class="images-data-items__message">Ошибка при получении данных</span>\n\t\t\t\t\t\t\t\t\t</div>`;
  }

  function setData(data) {
    const photos = data.photos;
    let html = `<div class="images-data-items">`;
    if (0 === photos.total) {
      html += `<span class="images-data-items__message">Нету данных</span>`;
      html += "</div>";
      imagesBlock.innerHTML = html;
      return;
    }
    if (0 === photos.photo.length) {
      html += `<span class="images-data-items__message">На данной странице нету изображений</span>`;
      html += "</div>";
      imagesBlock.innerHTML = html;
      paginationBlock.style.display = "flex";
      return;
    }
    data.photos.photo.forEach((element) => {
      if ("0" !== element.server) {
        const imageUrl = `http://farm${element.farm}.staticflickr.com/${element.server}/${element.id}_${element.secret}.jpg`;
        html += `<article class="images-data__card card-image">\n  \t\t\t\t\t<div class="card-image__image">\n  \t\t\t\t\t\t<div data-img-container class="card-image__image-ibg">\n  \t\t\t\t\t\t\t<img\n  \t\t\t\t\t\t\t\tsrc="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw=="\n  \t\t\t\t\t\t\t\tclass="lazy"\n  \t\t\t\t\t\t\t\tdata-src="${imageUrl}"\n  \t\t\t\t\t\t\t\talt="image">\n  \t\t\t\t\t\t</div>\n  \t\t\t\t\t</div>\n  \t\t\t\t\t<div class="card-image__title">\n  \t\t\t\t\t\t<span>${element.title}</span>\n  \t\t\t\t\t</div>\n  \t\t\t\t</article>`;
      }
    });
    html += "</div>";
    imagesBlock.innerHTML = html;
    paginationBlock.style.display = "flex";
    lazyLoad();
  }

  function checkPagination(isPaginationUpdate, newPages, search) {
    if (!isPaginationUpdate) return;
    newPages = newPages >= 100 ? 99 : newPages;
    pages = newPages;
    paginationButtons.generatePaginationButtonContainer(pages, 1);
    paginationButtons.onChange((e) => {
      getImages(search, e.target.value, false);
    });
  }

  document.addEventListener("click", documentActions);
  function documentActions(e) {
    searchButtonClick(e);
    clearButtonClick(e);
  }
  function searchButtonClick(e) {
    if (e.target.closest(".form-images-search__button")) {
      const input = document.querySelector(".input__field");
      const searchString = input.value;
      getImages(searchString);
      e.preventDefault();
    }
  }
  function clearButtonClick(e) {
    if (e.target.closest(".input__clear")) {
      const input = document.querySelector(".input__field");
      if (input.value && input.value.length > 0) {
        input.value = "";
        getImages("");
        input.focus();
      }
      e.preventDefault();
    }
  }
})();
