import "./styles.css";
import { homePage } from "./home.js";
import { Menu } from "./menu.js";

// All buttons
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

homeBtn.addEventListener("click", () => {
    homePage();
})

menuBtn.addEventListener("click", () => {
    Menu();
});