export { home };

function home() {
  const homePage = document.createElement("div");
  //   homePage.textContent = "test home div";
  homePage.classList.add("homePage");

  const classes = ["name", "story", "hours", "location"];
  const text = ["Rolling Brews", "", "", "123 Moose, Anch, AK 99501"];
  const hours = [
    "Monday: 7am-3pm",
    "Tuesday: 7am-3pm",
    "Wednesday: 7am-3pm",
    "Thursday: 7am-3pm",
    "Friday: 7am-8pm",
    "Saturday: 7am-8pm",
    "Sunday: 7am-1pm",
  ];
  for (let i = 0; i < classes.length; i++) {
    const div = document.createElement("div");
    div.classList.add(classes[i]);
    // div.classList.add("homeBlocks");
    div.innerHTML = text[i];
    if (i === 1) {
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      div2.classList.add("storyheader");
      div3.classList.add("storytext");
      div2.textContent = "Our Story: ";
      div3.textContent =
        "This is a story all about how Rolling Brews got rolling around! Come get caffeinated at some of your favorite locations that we will be rolling through this year. Try out our variety of espresso and coffee drinks!";
      div.appendChild(div2);
      div.appendChild(div3);
    }
    if (i === 2) {
      const div2 = document.createElement("div");
      div2.classList.add("hoursheader");
      div2.textContent = "Hours:";
      div.appendChild(div2);
      for (let i = 0; i < hours.length; i++) {
        const div3 = document.createElement("div");
        div3.classList.add("hourslist");
        div3.textContent = hours[i];
        div.appendChild(div3);
      }
    }
    homePage.appendChild(div);
  }

  return homePage;
}
