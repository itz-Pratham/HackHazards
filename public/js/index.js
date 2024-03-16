'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 * 
 * preloader will be visible until document load
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR
 * 
 * show the mobile navbar when click menu button
 * and hidden after click menu close button or overlay
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER & BACK TOP BTN
 * 
 * active header & back top btn when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElementOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const revealElementOnScroll = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", revealElementOnScroll);

window.addEventListener("load", revealElementOnScroll);

const button1 = document.getElementById('myButton');
const button2 = document.getElementById('myButton1');
const button3 = document.getElementById('myButton2');
const button4 = document.getElementById('myButton3');


button1.addEventListener('click', function() {
  // Action for button 1 click
 
          const dropdownContent = document.getElementById("clicker");
          
          // Function to toggle the display of the dropdown content on button click
          function toggleDropdown() {
              if (dropdownContent.style.display === "block") {
                  dropdownContent.style.display = "none"; // Hide the dropdown
              } else {
                  dropdownContent.style.display = "block"; // Show the dropdown
              }
          }
          
          // Attach the click event listener to the button
          button1.addEventListener("click", toggleDropdown);

});

button2.addEventListener('click', function() {

  const Dropdown = document.getElementById("clicker1");
  
  // Function to toggle the display of the dropdown content on button click
  function toggleDropdown() {
      if (Dropdown.style.display === "block") {
          Dropdown.style.display = "none"; // Hide the dropdown
      } else {
          Dropdown.style.display = "block"; // Show the dropdown
      }
  }
  
  // Attach the click event listener to the button
  button2.addEventListener("click", toggleDropdown);

});

button3.addEventListener('click', function() {
  // Action for button 3 click

  const myDropdown = document.getElementById("clicker2");
  
  // Function to toggle the display of the dropdown content on button click
  function toggleDropdown() {
      if (myDropdown.style.display === "block") {
          myDropdown.style.display = "none"; // Hide the dropdown
      } else {
          myDropdown.style.display = "block"; // Show the dropdown
      }
  }
  
  // Attach the click event listener to the button
  button3.addEventListener("click", toggleDropdown);

});
button4.addEventListener('click', function() {
 
  const Drop= document.getElementById("clicker3");
  
  // Function to toggle the display of the dropdown content on button click
  function toggleDropdown() {
      if (Drop.style.display === "block") {
          Drop.style.display = "none"; // Hide the dropdown
      } else {
          Drop.style.display = "block"; // Show the dropdown
      }
  }
  
  // Attach the click event listener to the button
  button4.addEventListener("click", toggleDropdown);

});