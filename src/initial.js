export { TitleBar };
import TopBackground from "./espresso.jpg";

function TitleBar() {
  const element = document.createElement("div");
  element.setAttribute("id", "titleBar");

  const title = document.createElement("div");
  title.textContent = "Rolling Brews";
  title.classList.add("title");

  const myTopBackground = new Image();
  myTopBackground.src = TopBackground;
  myTopBackground.classList.add("topBackground");

  const story = document.createElement("div");
  story.textContent =
    "These brews be rolling! Come visit our state of the art cafe on wheels. We caffeinate Ohio's best events with top quality brews.";
  story.classList.add("story");

  element.appendChild(myTopBackground);
  element.appendChild(title);
  element.appendChild(story);

  return element;
}

// function title() {
//   const element = document.createElement("div");

//   element.textContent = "Rolling Brews";
//   element.classList.add("title");

//   return element;
// }
// function background() {
//   const myTopBackground = new Image();
//   myTopBackground.src = TopBackground;
//   myTopBackground.classList.add("topBackground");

//   return myTopBackground;
// }

// function story() {
//   const element = document.createElement("div");

//   element.textContent =
//     "These brews be rolling! Come visit our state of the art cafe on wheels. We caffeinate Ohio's best events with top quality brews.";
//   element.classList.add("story");

//   return element;
// }
