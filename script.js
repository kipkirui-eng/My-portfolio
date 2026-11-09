function toggleMenu() {
        document.getElementById("nav-menu").classList.toggle("active");
    }


const currentPage = window.location.pathname.split("/").pop();

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    if (link.getAttribute("href").toLowerCase() === currentPage.toLowerCase()) {
        link.classList.add("active");
    }

});