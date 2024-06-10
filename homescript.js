let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
    let navBar = document.querySelector(".navbar"); // Corrected selector
    navBar.classList.toggle("active"); // Corrected case
}
