document.addEventListener("DOMContentLoaded", () => {
  const tabsBtn = document.querySelectorAll(".section-configuration__tabs-nav-btn");
  const tabsItem = document.querySelectorAll(".section-configuration__item");

  const makeActiveBtn = (event) => {
    tabsBtn.forEach((tab) => tab.classList.remove("active"));
    event.target.classList.add("active");
    makeActiveTabItem(event.target.getAttribute("data-tab"));
  };

  const makeActiveTabItem = (dataAtr = "#tab1") => {
    tabsItem.forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector(dataAtr).classList.add("active");
  };

  tabsBtn.forEach((el) => el.addEventListener("click", makeActiveBtn));
});
