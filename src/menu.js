export { menu };

function menu() {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menuPage");

  const categories = ["name", "espresso", "coffee", "tea", "food"];
  const menuitems = ["Rolling Brews"];
  const espresso = [
    "Espresso Shot ... 2.5",
    "Cortado ... 3.5",
    "Cappuccino ... 4",
    "Latte ... 4.5",
    "Mocha ... 5",
  ];
  const coffee = [
    "Drip - Light Roast ... 2.5",
    "Drip - Medium Roast ... 2.5",
    "AeroPress ... 3.5",
    "Pour Over ... 3.5",
  ];
  const tea = [
    "Green Tea ... 3",
    "Black Tea ... 3",
    "Oolong Tea ... 3",
    "Earl Grey ... 3",
  ];
  const food = [
    "Bagel w/ Cream Cheese ... 4",
    "Breakfast Bagel ... 6",
    "Donut ... 2.5",
    "Little Muffin ... 2",
  ];

  for (let i = 0; i < categories.length; i++) {
    const div = document.createElement("div");
    div.classList.add(categories[i]);
    div.textContent = menuitems[i];
    if (categories[i] === "espresso") {
      const div2 = document.createElement("div");
      div2.classList.add("menuheader");
      div2.textContent = "Espresso";
      div.appendChild(div2);
      for (let i = 0; i < espresso.length; i++) {
        const div3 = document.createElement("div");
        div3.classList.add("menulist");
        div3.textContent = espresso[i];
        div.appendChild(div3);
      }
    }
    if (categories[i] === "coffee") {
      const div2 = document.createElement("div");
      div2.classList.add("menuheader");
      div2.textContent = "Coffee";
      div.appendChild(div2);
      for (let i = 0; i < coffee.length; i++) {
        const div3 = document.createElement("div");
        div3.classList.add("menulist");
        div3.textContent = coffee[i];
        div.appendChild(div3);
      }
    }
    if (categories[i] === "tea") {
      const div2 = document.createElement("div");
      div2.classList.add("menuheader");
      div2.textContent = "Tea";
      div.appendChild(div2);
      for (let i = 0; i < tea.length; i++) {
        const div3 = document.createElement("div");
        div3.classList.add("menulist");
        div3.textContent = tea[i];
        div.appendChild(div3);
      }
    }
    if (categories[i] === "food") {
      const div2 = document.createElement("div");
      div2.classList.add("menuheader");
      div2.textContent = "Food";
      div.appendChild(div2);
      for (let i = 0; i < espresso.length; i++) {
        const div3 = document.createElement("div");
        div3.classList.add("menulist");
        div3.textContent = food[i];
        div.appendChild(div3);
      }
    }
    menuPage.appendChild(div);
  }
  //   for (let i = 0; i < menuitems.length; i++) {
  //     const div = document.createElement("div");
  //     div.classList.add(menuitems[i]);
  //     // div.classList.add("homeBlocks");
  //     div.innerHTML = text[i];
  //     if (i === 1) {
  //       const div2 = document.createElement("div");
  //       const div3 = document.createElement("div");
  //       div2.classList.add("storyheader");
  //       div3.classList.add("storytext");
  //       div2.textContent = "Our Story: ";
  //       div3.textContent = "MENU MENU MENU MENU";
  //       div.appendChild(div2);
  //       div.appendChild(div3);
  //     }
  //     if (i === 2) {
  //       const div2 = document.createElement("div");
  //       div2.classList.add("hoursheader");
  //       div2.textContent = "Hours:";
  //       div.appendChild(div2);
  //       for (let i = 0; i < hours.length; i++) {
  //         const div3 = document.createElement("div");
  //         div3.classList.add("hourslist");
  //         div3.textContent = hours[i];
  //         div.appendChild(div3);
  //       }
  //     }
  //     menuPage.appendChild(div);
  //   }

  return menuPage;
}
