// Will get all the class panel by using querySelectorAll
const panels = document.querySelectorAll(".panel");

// First we iterate the panels by using forEach since panels is an array
// Then we will add event listener click that will trigger once click an specific panel
// A function removeActiveClass will be run first before adding active classlist
panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// This function role is when call, it will iterate on each panel and remove all active classlist
const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
