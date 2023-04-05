// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("fa-moon")) {
    darkmode.classList.replace("fa-moon", "fa-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("fa-sun", "fa-moon");
    document.body.classList.remove("active");
  }
};
$(window).on("load", function() {
  setTimeout(function() {
    $(".loader-wrapper").fadeOut("slow", function() {
      $(this).remove(); // remove the loader from the DOM
      $(".main-content").fadeIn("slow"); // show the main content
      $("body").css("overflow", "auto"); // show the scroll bar
    });
  }, 1000); // hide the loader after 1 second
});
