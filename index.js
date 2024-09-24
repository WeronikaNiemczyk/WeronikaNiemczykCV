const buttons = document.querySelectorAll(".toggle-btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const collapsible = this.parentElement;
    collapsible.classList.toggle("active");
  });
});

const sections = document.querySelectorAll(".toggle-section");

sections.forEach((section) => {
  section.addEventListener("click", function () {
    const collapsible = this.parentElement;
    collapsible.classList.toggle("active");
  });
});

// Modal

const modals = [
  document.getElementById("myModal1"),
  document.getElementById("myModal2"),
  document.getElementById("myModal3"),
];

const btns = [
  document.getElementById("myBtn1"),
  document.getElementById("myBtn2"),
  document.getElementById("myBtn3"),
];

// Pobierz wszystkie elementy zamykające (span z klasą 'close')
const spans = document.getElementsByClassName("close");

// Otwieranie modala po kliknięciu przycisku
btns.forEach((button, index) => {
  button.onclick = function () {
    modals[index].style.display = "block";
  };
});

// Zamykanie modala po kliknięciu na 'span'
Array.from(spans).forEach((span, index) => {
  span.onclick = function () {
    modals[index].style.display = "none";
  };
});

// Zamykanie modala po kliknięciu poza nim
window.onclick = function (event) {
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};

// Get the modal
// var modal1 = document.getElementById("myModal1");
// var modal2 = document.getElementById("myModal2");
// var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
// var btn1 = document.getElementById("myBtn1");
// var btn2 = document.getElementById("myBtn2");
// var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn1.onclick = function () {
//   modal1.style.display = "block";
// };
// btn2.onclick = function () {
//   modal2.style.display = "block";
// };
// btn3.onclick = function () {
//   modal3.style.display = "block";
// };

// When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   modal1.style.display = "none";
// };
// span.onclick = function () {
//   modal2.style.display = "none";
// };
// span.onclick = function () {
//   modal3.style.display = "none";
// };

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// };
// window.onclick = function (event) {
//   if (event.target == modal1) {
//     modal2.style.display = "none";
//   }
// };
// window.onclick = function (event) {
//   if (event.target == modal1) {
//     modal3.style.display = "none";
//   }
// };
