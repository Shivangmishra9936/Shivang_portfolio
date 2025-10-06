// Wait for DOM to be loaded
document.addEventListener("DOMContentLoaded", function () {

    // Set current year in the footer
    const currentYearSpan = document.getElementById("currentYear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Hamburger menu toggle for mobile
    const hamburger = document.getElementById("hamburger-menu");
    const navUl = document.querySelector("nav ul");
    if (hamburger && navUl) {
        hamburger.addEventListener("click", () => {
            navUl.classList.toggle("active");
        });

        // Close menu when a link is clicked
        navUl.querySelectorAll("a").forEach(link =>
            link.addEventListener("click", () => {
                if (navUl.classList.contains("active")) {
                    navUl.classList.remove("active");
                }
            })
        );
    }

    // Optional: Highlight active link on scroll
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("main section");
    let headerHeight = document.querySelector("header").offsetHeight;

    function changeLinkState() {
        let index = sections.length;
        while (--index && window.scrollY + headerHeight < sections[index].offsetTop) {}
        navLinks.forEach(link => link.classList.remove("active"));
        if (navLinks[index]) navLinks[index].classList.add("active");
    }

    window.addEventListener("scroll", changeLinkState);
});
