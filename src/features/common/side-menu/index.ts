const runSideMenu = (rootEl: Element) => {
  const links = rootEl.querySelectorAll(".side-menu__item-link");
  const contents = rootEl.querySelectorAll(".side-menu__content");

  links.forEach((link, linkIdx) => {
    link.addEventListener("click", () => {
      links.forEach((link) => {
        link.classList.remove("side-menu__item-link--active");
      });

      contents.forEach((content) => {
        content.classList.remove("side-menu__content--active");
      });

      const selectedContent = contents[linkIdx];

      console.log("selectedConten", selectedContent);

      if (selectedContent) {
        selectedContent.classList.add("side-menu__content--active");
        link.classList.add("side-menu__item-link--active");
      }
    });
  });
};

export default runSideMenu;
