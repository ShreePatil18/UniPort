document.addEventListener("DOMContentLoaded", function () {
  const projectsContainer = document.querySelector(".projects-container");

  projectsContainer.addEventListener("wheel", function (event) {
    event.preventDefault();
    projectsContainer.scrollLeft += event.deltaY;
  });

  projectsContainer.addEventListener("touchstart", function (event) {
    const startX = event.touches[0].clientX;
    let scrollLeft = projectsContainer.scrollLeft;

    projectsContainer.addEventListener("touchmove", function (event) {
      const touchMove = event.touches[0].clientX;
      const scrollDistance = startX - touchMove;
      projectsContainer.scrollLeft = scrollLeft + scrollDistance;
    });

    projectsContainer.addEventListener("touchend", function () {
      projectsContainer.removeEventListener("touchmove", () => {});
      projectsContainer.removeEventListener("touchend", () => {});
    });
  });
});