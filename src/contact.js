export { contact };

function contact() {
  const contactPage = document.createElement("div");
  contactPage.classList.add("contactPage");

  const classes = ["name", "founders", "managers"];
  const name = ["Rolling Brews"];
  const founders = ["Fred Flinstone", "Bam Bam"];
  const foundersEmails = ["ff@rollingbrews.com", "bb@rollingbrews.com"];
  const foundersPhones = ["555-555-5555", "555-555-5554"];
  const managers = ["Albertus Dumbledorus", "Reginald Weasles"];
  const managersEmails = ["ad@rollingbrews.com", "rw@rollingbrews.com"];
  const managersPhones = ["555-555-5553", "555-555-5552"];
  for (let i = 0; i < classes.length; i++) {
    const div = document.createElement("div");
    div.classList.add(classes[i]);
    div.textContent = name[i];
    if (classes[i] === "founders") {
      const div2 = document.createElement("div");
      div2.classList.add("contactheader");
      div2.textContent = "Founders";
      div.appendChild(div2);
      for (let i = 0; i < founders.length; i++) {
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        const div5 = document.createElement("div");
        div3.classList.add("contactName");
        div3.textContent = founders[i];
        div4.classList.add("contactEmail");
        div4.textContent = foundersEmails[i];
        div5.classList.add("contactPhone");
        div5.textContent = foundersPhones[i];
        div.appendChild(div3);
        div.appendChild(div4);
        div.appendChild(div5);
      }
    }
    if (classes[i] === "managers") {
      const div2 = document.createElement("div");
      div2.classList.add("contactheader");
      div2.textContent = "Managers";
      div.appendChild(div2);
      for (let i = 0; i < founders.length; i++) {
        const div3 = document.createElement("div");
        const div4 = document.createElement("div");
        const div5 = document.createElement("div");
        div3.classList.add("contactName");
        div3.textContent = managers[i];
        div4.classList.add("contactEmail");
        div4.textContent = managersEmails[i];
        div5.classList.add("contactPhone");
        div5.textContent = managersPhones[i];
        div.appendChild(div3);
        div.appendChild(div4);
        div.appendChild(div5);
      }
    }
    contactPage.appendChild(div);
  }

  //   for (let i = 0; i < categories.length; i++) {
  //     const div = document.createElement("div");
  //     div.classList.add(categories[i]);
  //     div.textContent = menuitems[i];
  //     if (categories[i] === "espresso") {
  //       const div2 = document.createElement("div");
  //       div2.classList.add("menuheader");
  //       div2.textContent = "Espresso";
  //       div.appendChild(div2);
  //       for (let i = 0; i < espresso.length; i++) {
  //         const div3 = document.createElement("div");
  //         div3.classList.add("menulist");
  //         div3.textContent = espresso[i];
  //         div.appendChild(div3);
  //       }
  //     }
  //     if (categories[i] === "coffee") {
  //       const div2 = document.createElement("div");
  //       div2.classList.add("menuheader");
  //       div2.textContent = "Coffee";
  //       div.appendChild(div2);
  //       for (let i = 0; i < coffee.length; i++) {
  //         const div3 = document.createElement("div");
  //         div3.classList.add("menulist");
  //         div3.textContent = coffee[i];
  //         div.appendChild(div3);
  //       }
  //     }

  return contactPage;
}
