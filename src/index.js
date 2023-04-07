import { headerTabs } from "./initial.js";
import { home } from "./home.js";
import "./style.css";

const header = document.getElementById("header");
const content = document.getElementById("content");

header.appendChild(headerTabs());
// content.appendChild(titleBar());
content.appendChild(home());
