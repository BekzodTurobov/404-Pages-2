//////////////////////////////////////////
//  Set Current Year
//////////////////////////////////////////
const yearEl = document.getElementById("current-year");
const date = new Date();
yearEl.textContent = date.getFullYear();

//////////////////////////////////////////
//  Make Select Option Work
//////////////////////////////////////////
function selectOption(event) {
  if (event.target.closest(".down-icon")) {
    openedOption = +event.target.dataset.icon;

    activeOption = document.getElementById(`container-${openedOption}`);

    if (
      openedOption === 1 &&
      optionsContainer[1].classList.contains("active")
    ) {
      optionsContainer[1].classList.remove("active");
    }
    if (
      openedOption === 2 &&
      optionsContainer[0].classList.contains("active")
    ) {
      optionsContainer[0].classList.remove("active");
    }

    activeOption.classList.toggle("active");

    activeOption.scroll(0, 0);

    return;
  } else if (!event.target.closest(".down-icon")) {
    optionsContainer.forEach((option) => {
      option.classList.remove("active");
    });
  }
}

function setOption() {
  document.querySelector(`[data-box="${openedOption}"]`).innerHTML =
    this.querySelector("a:link").innerHTML;

  activeOption.classList.remove("active");
}

////////////////////////////////////////
//  Make mobile navigation work
////////////////////////////////////////
function removeClass() {
  headerEl.classList.remove("nav-open");
  btnNavEl.classList.remove("toggle-btn");
}

function openNav(e) {
  if (e.target.closest(".btn-mobile-nav")) {
    headerEl.classList.toggle("nav-open");
    btnNavEl.classList.toggle("toggle-btn");
  } else if (!e.target.closest(".nav-container")) {
    removeClass();
  }
}

function closeNav(e) {
  if (
    e.key === "Escape" ||
    (headerEl.classList.contains("nav-open") &&
      btnNavEl.classList.contains("toggle-btn"))
  ) {
    removeClass();
  }
}

///////////////////////////////////////////////////
//  Smooth scrolling animation
///////////////////////////////////////////////////
function smoothScroll(e, link) {
  e.preventDefault();
  const href = link.getAttribute("href");
  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  // Scroll to other links
  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }

  if (href !== "#" && !href.startsWith("#")) {
    window.open(e.target.href);
  }

  // Close mobile navigation
  if (link.classList.contains("main-nav-link")) {
    removeClass();
  }
}
