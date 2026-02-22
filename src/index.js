import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

let currentPage = "home";

loadHomePage();

function clearContent() {
  document.getElementById("content").textContent = "";
}

const homeButton = document.getElementById("home");
function homeClicked() {
  if (currentPage === "home") return;
  currentPage = "home";
  clearContent();
  loadHomePage();
}
homeButton.addEventListener("click", homeClicked);

const menuButton = document.getElementById("menu");
function menuClicked() {
  if (currentPage === "menu") return;
  currentPage = "menu";
  clearContent();
  loadMenuPage();
}
menuButton.addEventListener("click", menuClicked);

const aboutButton = document.getElementById("about");
function aboutClicked() {
  if (currentPage === "about") return;
  currentPage = "about";
  clearContent();
  loadAboutPage();
}
aboutButton.addEventListener("click", aboutClicked);
