/* ==============================
PROJECT SLIDER
================================= */

const projectTrack = document.querySelector(".projects-track");

const nextProject = document.querySelector(".project-next");

const previousProject = document.querySelector(".project-prev");

if (projectTrack && nextProject && previousProject) {

    function updateProjectArrows() {

        const maxScroll =
            projectTrack.scrollWidth - projectTrack.clientWidth;

        const currentScroll = projectTrack.scrollLeft;

        // Hide left arrow at the beginning
        if (currentScroll <= 5) {

            previousProject.style.opacity = "0";
            previousProject.style.pointerEvents = "none";

        } else {

            previousProject.style.opacity = "1";
            previousProject.style.pointerEvents = "auto";

        }


        // Hide right arrow at the end
        if (currentScroll >= maxScroll - 5) {

            nextProject.style.opacity = "0";
            nextProject.style.pointerEvents = "none";

        } else {

            nextProject.style.opacity = "1";
            nextProject.style.pointerEvents = "auto";

        }

    }


    nextProject.addEventListener("click", () => {

        const projectCard =
            projectTrack.querySelector(".project-post");

        if (!projectCard) return;

        const cardWidth = projectCard.offsetWidth;

        const gap = 25;

        projectTrack.scrollBy({

            left: cardWidth + gap,

            behavior: "smooth"

        });

    });


    previousProject.addEventListener("click", () => {

        const projectCard =
            projectTrack.querySelector(".project-post");

        if (!projectCard) return;

        const cardWidth = projectCard.offsetWidth;

        const gap = 25;

        projectTrack.scrollBy({

            left: -(cardWidth + gap),

            behavior: "smooth"

        });

    });


    // Update arrows while scrolling
    projectTrack.addEventListener("scroll", updateProjectArrows);


    // Set correct initial state
    updateProjectArrows();

}

/* ==============================
   MOBILE NAVIGATION
================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

            menuToggle.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });


    /* Close menu when a navigation link is clicked */

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}