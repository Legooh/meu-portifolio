
let navLinks = document.querySelectorAll(".menu__link[data-goto]");
if (navLinks.length > 0) {
    navLinks.forEach((link) => {
        link.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(event) {
        const menuLink = event.target;
        if (
            menuLink.dataset.goto &&
            document.getElementById(menuLink.dataset.goto)
        ) {
            const gotoBlock = document.getElementById(menuLink.dataset.goto);
            const gotoBlockValue =
                gotoBlock.getBoundingClientRect().top +
                pageYOffset -
                document.querySelector("header").offsetHeight;

            if (iconMenu.classList.contains("_active")) {
                document.body.classList.remove("_lock");
                iconMenu.classList.remove("_active");
                menuBody.classList.remove("_active");
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });
            event.preventDefault();
        }
    }
}


let footerLink = document.querySelector(".footer__link");
footerLink.addEventListener("click", (event) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    event.preventDefault();
});


let sections = document.querySelectorAll(".page-section");
let sectionsArray = [];
sections.forEach((item) => {
    const section = {};
    let height = item.offsetHeight;
    let offset = item.offsetTop - item.offsetHeight * 0.4;
    let id = item.getAttribute("id");
    section.offset = offset;
    section.height = height;
    section.id = id;
    sectionsArray.push(section);
});


window.addEventListener("load", activeMenuLink);


window.addEventListener("scroll", activeMenuLink);

function activeMenuLink(e) {
    sectionsArray.forEach((section) => {
        let top = window.scrollY;

        if (top >= section.offset && top < section.offset + section.height) {
            navLinks.forEach((link) => {
                link.classList.remove("_active");
                if (link.dataset.goto === section.id) {
                    link.classList.add("_active");
                }
            });
        }
    });
}

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
    iconMenu.addEventListener("click", (e) => {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}

const typed = new Typed(".multiple-text", {
    strings: ["Desenvolvedor Front-end", "Analista de Sistemas"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// Phone mask for Brazilian format
document.querySelector('input[name="phone"]').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        e.target.value = value;
    }
});
