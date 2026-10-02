/* =========================================================
   TYPING ANIMATION
========================================================= */

const typingElement = document.getElementById("typing");

const roles = [
    "Software Developer",
    "Java Developer",
    "Web Developer",
    "Data Science Student",
    "Problem Solver"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {

                roleIndex = 0;

            }

        }

    }

    setTimeout(
        typingEffect,
        deleting ? 45 : 90
    );
}


typingEffect();


/* =========================================================
   PARTICLES
========================================================= */

const particlesContainer =
    document.getElementById("particles");


function createParticles() {

    for (let i = 0; i < 45; i++) {

        const particle =
            document.createElement("div");

        particle.classList.add("particle");

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            (8 + Math.random() * 15) + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particle.style.opacity =
            Math.random();

        particlesContainer.appendChild(particle);
    }
}


createParticles();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.querySelector(".menu-button");

const navLinks =
    document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("mobile-open");

    const icon =
        menuButton.querySelector("i");

    if (navLinks.classList.contains("mobile-open")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking */

document.querySelectorAll(".nav-link")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("mobile-open");

            const icon =
                menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header =
    document.querySelector(".header");


window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


/* =========================================================
   NUMBER COUNTERS
========================================================= */

const statNumbers =
    document.querySelectorAll(".stat-card strong");


let countersStarted = false;


function animateCounters() {

    if (countersStarted) return;

    const aboutSection =
        document.getElementById("about");

    const position =
        aboutSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        countersStarted = true;

        statNumbers.forEach(function (counter) {

            const target =
                parseFloat(
                    counter.getAttribute("data-target")
                );

            const isDecimal =
                target % 1 !== 0;

            let current = 0;

            const increment =
                target / 60;


            const updateCounter =
                setInterval(function () {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(updateCounter);

                    }


                    counter.textContent =
                        isDecimal
                            ? current.toFixed(2)
                            : Math.floor(current);

                }, 25);

        });

    }

}


window.addEventListener(
    "scroll",
    animateCounters
);


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name")
                .value.trim();

        const email =
            document.getElementById("email")
                .value.trim();

        const subject =
            document.getElementById("subject")
                .value.trim();

        const message =
            document.getElementById("message")
                .value.trim();


        if (
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ) {

            alert(
                "Please fill in all the fields."
            );

            return;

        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert(
                "Please enter a valid email address."
            );

            return;

        }


        alert(
            "Thank you, " +
            name +
            "! Your message has been submitted successfully."
        );


        contactForm.reset();

    }
);


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", function () {

    if (window.scrollY > 600) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   SMALL MOUSE PARALLAX EFFECT
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (window.innerWidth > 900) {

    document.addEventListener(
        "mousemove",
        function (event) {

            const x =
                (window.innerWidth / 2 - event.clientX) / 80;

            const y =
                (window.innerHeight / 2 - event.clientY) / 80;


            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();