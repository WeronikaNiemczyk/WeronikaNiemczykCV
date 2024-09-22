const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const collapsible = this.parentElement;
    collapsible.classList.toggle("active");
  });
});
