'use strict';




// element toggle function
//const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { 
  //elementToggleFunc(sidebar); 
});







// custom select variables
const select = document.querySelector("[data-page]");
const selectItems = document.querySelectorAll("[data-select-item]");
//const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");


// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      console.log("ciao1");
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      console.log("ciao2");
      filterItems[i].classList.add("active");
    } else {
      console.log("ciao3");
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}


const skillsList = document.querySelector(".skills-list");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const skillsItems = document.querySelectorAll(".skills-item");
const skillsPerPage = 5; // Numero di skills per pagina
let currentPage = 0;
const buttonStyle = `
  padding: 8px 16px;
  background-color: var(--onyx);
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  display: inline-block;
  border-radius: 10px
`;
prevButton.addEventListener("click", () => {
    if (currentPage > 0) {
        currentPage--;
        updateSkills();
    }
});

nextButton.addEventListener("click", () => {
    if (currentPage < Math.ceil(skillsItems.length / skillsPerPage) - 1) {
        currentPage++;
        updateSkills();
    }
});

function updateSkills() {
    const startIndex = currentPage * skillsPerPage;
    const endIndex = startIndex + skillsPerPage;

    skillsItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });

    // Aggiorna la visualizzazione del pulsante "Precedente"
    if (currentPage === 0) {
        prevButton.style.display = "none";
    } else {
      prevButton.style.cssText = buttonStyle;    }

    // Aggiorna la visualizzazione del pulsante "Successivo"
    if (currentPage === Math.ceil(skillsItems.length / skillsPerPage) - 1) {
        nextButton.style.display = "none";
    } else {
      nextButton.style.cssText = buttonStyle;    }
}

// Inizialmente, nascondi il pulsante "Precedente" finché non si scorre
prevButton.style.display = "none";

// Aggiorna la visualizzazione iniziale dei pulsanti
updateSkills();



