(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
                if (document.documentElement.classList.contains("catalog-open")) document.documentElement.classList.remove("catalog-open");
                if (document.documentElement.classList.contains("sub-menu-open")) document.documentElement.classList.remove("sub-menu-open");
            }
        }));
    }
    function spollers() {
        const spollersArray = document.querySelectorAll("[data-spollers]");
        if (spollersArray.length > 0) {
            const spollersRegular = Array.from(spollersArray).filter((function(item, index, self) {
                return !item.dataset.spollers.split(",")[0];
            }));
            if (spollersRegular.length) initSpollers(spollersRegular);
            let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
            if (mdQueriesArray && mdQueriesArray.length) mdQueriesArray.forEach((mdQueriesItem => {
                mdQueriesItem.matchMedia.addEventListener("change", (function() {
                    initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
                }));
                initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
            }));
            function initSpollers(spollersArray, matchMedia = false) {
                spollersArray.forEach((spollersBlock => {
                    spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
                    if (matchMedia.matches || !matchMedia) {
                        spollersBlock.classList.add("_spoller-init");
                        initSpollerBody(spollersBlock);
                        spollersBlock.addEventListener("click", setSpollerAction);
                    } else {
                        spollersBlock.classList.remove("_spoller-init");
                        initSpollerBody(spollersBlock, false);
                        spollersBlock.removeEventListener("click", setSpollerAction);
                    }
                }));
            }
            function initSpollerBody(spollersBlock, hideSpollerBody = true) {
                let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
                if (spollerTitles.length) {
                    spollerTitles = Array.from(spollerTitles).filter((item => item.closest("[data-spollers]") === spollersBlock));
                    spollerTitles.forEach((spollerTitle => {
                        if (hideSpollerBody) {
                            spollerTitle.removeAttribute("tabindex");
                            if (!spollerTitle.classList.contains("_spoller-active")) spollerTitle.nextElementSibling.hidden = true;
                        } else {
                            spollerTitle.setAttribute("tabindex", "-1");
                            spollerTitle.nextElementSibling.hidden = false;
                        }
                    }));
                }
            }
            function setSpollerAction(e) {
                const el = e.target;
                if (el.closest("[data-spoller]")) {
                    const spollerTitle = el.closest("[data-spoller]");
                    const spollersBlock = spollerTitle.closest("[data-spollers]");
                    const oneSpoller = spollersBlock.hasAttribute("data-one-spoller");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    if (!spollersBlock.querySelectorAll("._slide").length) {
                        if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) hideSpollersBody(spollersBlock);
                        spollerTitle.classList.toggle("_spoller-active");
                        _slideToggle(spollerTitle.nextElementSibling, spollerSpeed);
                    }
                    e.preventDefault();
                }
            }
            const spollersClose = document.querySelectorAll("[data-spoller-close]");
            if (spollersClose.length) document.addEventListener("click", (function(e) {
                const el = e.target;
                if (!el.closest("[data-spollers]")) spollersClose.forEach((spollerClose => {
                    const spollersBlock = spollerClose.closest("[data-spollers]");
                    const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
                    spollerClose.classList.remove("_spoller-active");
                    _slideUp(spollerClose.nextElementSibling, spollerSpeed);
                }));
            }));
        }
    }
    function hideSpollersBody(spollersBlock) {
        const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
        const spollerSpeed = spollersBlock.dataset.spollersSpeed ? parseInt(spollersBlock.dataset.spollersSpeed) : 500;
        if (spollerActiveTitle && !spollersBlock.querySelectorAll("._slide").length) {
            spollerActiveTitle.classList.remove("_spoller-active");
            _slideUp(spollerActiveTitle.nextElementSibling, spollerSpeed);
        }
    }
    let _slideUp = (target, duration = 500, showmore = 0) => {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = `${target.offsetHeight}px`;
            target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            window.setTimeout((() => {
                target.hidden = !showmore ? true : false;
                !showmore ? target.style.removeProperty("height") : null;
                target.style.removeProperty("padding-top");
                target.style.removeProperty("padding-bottom");
                target.style.removeProperty("margin-top");
                target.style.removeProperty("margin-bottom");
                !showmore ? target.style.removeProperty("overflow") : null;
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideUpDone", {
                    detail: {
                        target
                    }
                }));
            }), duration);
        }
    };
    let _slideDown = (target, duration = 500, showmore = 0) => {
        if (!target.classList.contains("_slide")) {
            target.classList.add("_slide");
            target.hidden = target.hidden ? false : null;
            showmore ? target.style.removeProperty("height") : null;
            let height = target.offsetHeight;
            target.style.overflow = "hidden";
            target.style.height = showmore ? `${showmore}px` : `0px`;
            target.style.paddingTop = 0;
            target.style.paddingBottom = 0;
            target.style.marginTop = 0;
            target.style.marginBottom = 0;
            target.offsetHeight;
            target.style.transitionProperty = "height, margin, padding";
            target.style.transitionDuration = duration + "ms";
            target.style.height = height + "px";
            target.style.removeProperty("padding-top");
            target.style.removeProperty("padding-bottom");
            target.style.removeProperty("margin-top");
            target.style.removeProperty("margin-bottom");
            window.setTimeout((() => {
                target.style.removeProperty("height");
                target.style.removeProperty("overflow");
                target.style.removeProperty("transition-duration");
                target.style.removeProperty("transition-property");
                target.classList.remove("_slide");
                document.dispatchEvent(new CustomEvent("slideDownDone", {
                    detail: {
                        target
                    }
                }));
            }), duration);
        }
    };
    let _slideToggle = (target, duration = 500) => {
        if (target.hidden) return _slideDown(target, duration); else return _slideUp(target, duration);
    };
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function uniqArray(array) {
        return array.filter((function(item, index, self) {
            return self.indexOf(item) === index;
        }));
    }
    function dataMediaQueries(array, dataSetValue) {
        const media = Array.from(array).filter((function(item, index, self) {
            if (item.dataset[dataSetValue]) return item.dataset[dataSetValue].split(",")[0];
        }));
        if (media.length) {
            const breakpointsArray = [];
            media.forEach((item => {
                const params = item.dataset[dataSetValue];
                const breakpoint = {};
                const paramsArray = params.split(",");
                breakpoint.value = paramsArray[0];
                breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
                breakpoint.item = item;
                breakpointsArray.push(breakpoint);
            }));
            let mdQueries = breakpointsArray.map((function(item) {
                return "(" + item.type + "-width: " + item.value + "px)," + item.value + "," + item.type;
            }));
            mdQueries = uniqArray(mdQueries);
            const mdQueriesArray = [];
            if (mdQueries.length) {
                mdQueries.forEach((breakpoint => {
                    const paramsArray = breakpoint.split(",");
                    const mediaBreakpoint = paramsArray[1];
                    const mediaType = paramsArray[2];
                    const matchMedia = window.matchMedia(paramsArray[0]);
                    const itemsArray = breakpointsArray.filter((function(item) {
                        if (item.value === mediaBreakpoint && item.type === mediaType) return true;
                    }));
                    mdQueriesArray.push({
                        itemsArray,
                        matchMedia
                    });
                }));
                return mdQueriesArray;
            }
        }
    }
    let translations = {};
    const setLocale = async newLocale => {
        translations = await fetchTranslations(newLocale);
        translatePage();
        setLanguageTextButton(newLocale);
    };
    const fetchTranslations = async newLocale => {
        const response = await fetch(`assets/lang/${newLocale}.json`);
        if (!response.ok) console.log(`Could not fetch translations for locale ${newLocale}`);
        return await response.json();
    };
    function translatePage() {
        document.querySelectorAll("[data-localization-key]").forEach((element => {
            let key = element.getAttribute("data-localization-key");
            let translation = translations[key];
            element.innerText = translation;
        }));
    }
    function setLanguageTextButton(language) {
        const currentLanguageButton = document.querySelector("[data-current-language]");
        currentLanguageButton.innerHTML = language;
    }
    function setCurrentLanguageClass(newLocale) {
        document.querySelectorAll("[data-language]").forEach((item => {
            if (item.classList.contains("current-language")) item.classList.remove("current-language");
        }));
        let currentLanguageButton = document.querySelector(`[data-language="${newLocale}"]`);
        currentLanguageButton.classList.add("current-language");
    }
    function changeWindowTheme() {
        const htmlBlock = document.documentElement;
        const saveUserTheme = localStorage.getItem("user-theme");
        let userTheme;
        if (window.matchMedia) userTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e => {
            !saveUserTheme ? changeTheme() : null;
        }));
        const themeButton = document.querySelector(".header__theme");
        if (themeButton) themeButton.addEventListener("click", (function(e) {
            changeTheme(true);
        }));
        function setThemeClass() {
            if (saveUserTheme) htmlBlock.classList.add(saveUserTheme); else htmlBlock.classList.add(userTheme);
        }
        setThemeClass();
        function changeTheme(saveTheme = false) {
            let currentTheme = htmlBlock.classList.contains("light") ? "light" : "dark";
            let newTheme;
            if ("light" === currentTheme) newTheme = "dark"; else if ("dark" === currentTheme) newTheme = "light";
            htmlBlock.classList.remove(currentTheme);
            htmlBlock.classList.add(newTheme);
            saveTheme ? localStorage.setItem("user-theme", newTheme) : null;
        }
    }
    let defaultLanguage = "ru";
    document.addEventListener("click", documentActions);
    document.addEventListener("DOMContentLoaded", windowLoad);
    function windowLoad() {
        changeWindowTheme();
        const language = localStorage.getItem("language") ? localStorage.getItem("language") : defaultLanguage;
        setLocale(language);
        setCurrentLanguageClass(language);
    }
    function documentActions(e) {
        const targetElement = e.target;
        translateButtonClick(targetElement);
        if (targetElement.closest(".card-featured-mugs__button-audio")) {
            var playButton = targetElement;
            if (playButton.classList.contains("pause")) {
                var audioBlock = playButton.closest(".audio-block");
                var audio = audioBlock.querySelector("#audio");
                audio.pause();
                playButton.classList.remove("pause");
                playButton.classList.add("play");
                e.preventDefault();
                return;
            }
            audioBlock = playButton.closest(".audio-block");
            audio = audioBlock.querySelector("#audio");
            audio.onended = e => {
                audio.currentTime = 0;
                audio.src = audio.src;
                playButton.classList.remove("pause");
                playButton.classList.add("play");
                e.preventDefault();
            };
            audio.play();
            playButton.classList.remove("play");
            playButton.classList.add("pause");
            e.preventDefault();
        }
    }
    function translateButtonClick(targetElement) {
        if (targetElement.closest("[data-language]")) {
            let language = targetElement.dataset.language;
            setLocale(language);
            localStorage.setItem("language", language);
            const spollerButton = targetElement.closest("[data-language]");
            const spollersBlock = spollerButton.closest("[data-spollers]");
            hideSpollersBody(spollersBlock);
            setCurrentLanguageClass(language);
            e.preventDefault();
        }
    }
    isWebp();
    menuInit();
    spollers();
})();