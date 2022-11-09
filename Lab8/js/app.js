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
})();
