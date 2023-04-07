export { headerTabs };

function headerTabs() {
  const tabs = document.createElement("div");
  tabs.classList.add("tabs");
  // tabs.textContent = "Tabs test";

  const tab1 = document.createElement("button");
  tab1.classList.add("tab");
  tab1.id = "hometab";
  tab1.textContent = "Home";

  const tab2 = document.createElement("button");
  tab2.classList.add("tab");
  tab2.id = "menutab";
  tab2.textContent = "Menu";

  const tab3 = document.createElement("button");
  tab3.classList.add("tab");
  tab3.id = "contacttab";
  tab3.textContent = "Contact";

  tabs.appendChild(tab1);
  tabs.appendChild(tab2);
  tabs.appendChild(tab3);

  return tabs;
}
