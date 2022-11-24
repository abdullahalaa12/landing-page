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

let navItems;
let activeSectionIndex = 0;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
const changeHighlightedSection = (newIndex) => {
  if (newIndex !== activeSectionIndex) {
    // remove active class from previous highlighted section
    sections[activeSectionIndex].classList.remove("active");
    navItems[activeSectionIndex].classList.remove("navbar__active");

    // add active class to the new one
    sections[newIndex].classList.add("active");
    navItems[newIndex].classList.add("navbar__active");

    activeSectionIndex = newIndex;
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const buildNav = () => {
  // create a fragment to append all the sections to the nav once
  const fragment = document.createDocumentFragment();

  // loop over sections
  for (const section of sections) {
    // create list item for each section
    const item = document.createElement("li");

    // nest an anchor to the section
    item.innerHTML = `<a class='menu__link' href=#${section.id}>
            ${section.getAttribute("data-nav")}
    </a>`;

    fragment.appendChild(item);
  }

  // append all the section items to the nav list (ul) only once
  navList.appendChild(fragment);

  navItems = navList.querySelectorAll("li");
};

// Add class 'active' to section when near top of viewport
const highlightSection = () => {
  const middleOfViewPort = window.innerHeight / 2;
  // loop over sections
  for (let i = 0; i < sections.length; i++) {
    // top & bottom y coordinates of the current section
    const top = sections[i].getBoundingClientRect().top;
    const bottom = sections[i].getBoundingClientRect().bottom;
    // if the middle of the view port y coordinate inside the section make it highlighted
    if (middleOfViewPort >= top && middleOfViewPort <= bottom) {
      changeHighlightedSection(i);

      //no need to continue the loop
      break;
    }
  }
};

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
sections[0].classList.add("active");
navItems[0].classList.add("navbar__active");

document.addEventListener("scroll", highlightSection);
