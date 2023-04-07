import { headerTabs } from "./initial.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import "./style.css";

const header = document.getElementById("header");
const content = document.getElementById("content");

header.appendChild(headerTabs());
// content.appendChild(home());
content.appendChild(menu());

function displayHome() {
  //clear content div
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(home());
}

function displayMenu() {
  //clear content div
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(menu());
}

function displayContact() {
  //clear content div
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.appendChild(contact());
}

document.getElementById("hometab").addEventListener("click", displayHome);
document.getElementById("menutab").addEventListener("click", displayMenu);
document.getElementById("contacttab").addEventListener("click", displayContact);
