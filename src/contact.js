export { contact };

function contact() {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contactPage");

  const classes = ["name", "story", "hours", "location"];
  const text = ["Rolling Brews", "", "", "123 UTB, ATC 90210"];
  const hours = ["This is the contact page"];
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
      div3.textContent = "CONTACT CONTACT CONTACT CONTACT";
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
    contactPage.appendChild(div);
  }

  return contactPage;
}
