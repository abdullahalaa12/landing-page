/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("main section");
const navList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNav = () => {
  const fragment = document.createDocumentFragment();

  for (const section of sections) {
    const item = document.createElement("li");
    item.innerHTML = `<a class='menu__link' href=#${section.id}>
            ${section.getAttribute("data-nav")}
    </a>`;
    fragment.appendChild(item);
  }

  navList.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID
const scrollToSection = (event) => {
  const clickedElement = event.target;

  //check if a nav link is clicked
  if (clickedElement.nodeName === "A") {
    //prevent the link default behavior to avoid unsmooth scroll
    event.preventDefault();

    //scroll to the clicked section link with smooth behavior
    document.querySelector(clickedElement.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNav();

// Scroll to section on link click using event delegation
navList.addEventListener("click", scrollToSection);

// Set sections as active
