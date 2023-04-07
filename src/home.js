export { home };

function home() {
  const homePage = document.createElement("div");
  //   homePage.textContent = "test home div";
  homePage.classList.add("homePage");

  const classes = ["name", "story", "hours", "location"];
  const text = [
    "Rolling Brews",
    "This is a story all about how Rolling Brews got rolling around!",
    "Mon: All Day",
    "123 UTB, ATC 90210",
  ];
  for (let i = 0; i < classes.length; i++) {
    const div = document.createElement("div");
    div.className = classes[i];
    div.textContent = text[i];
    homePage.appendChild(div);
  }

  return homePage;
}
