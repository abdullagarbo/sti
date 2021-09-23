const panels = document.querySelectorAll(".panel");

/**
 * Metoden querySelectorAll() returnerar alla element i dokumentet som matchar en angiven CSS -väljare
 * i mitt fall klass==panel
 */

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
