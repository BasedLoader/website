function darkMode() {
    document.querySelectorAll(".bg-light").forEach((element) => {
        element.className = element.className.replace(/-light/g, "-dark");
    });

    document.querySelectorAll(".text-dark").forEach((element) => {
        element.className = element.className.replace(/-dark/g, "-light");
    });

    document.querySelectorAll(".btn-outline-dark").forEach((element) => {
        element.className = element.className.replace("btn-outline-dark", "btn-outline-secondary");
    });

    document.querySelectorAll(".btn-close").forEach((element) => {
        element.className = element.className.replace("btn-close", "btn-close btn-close-white");
    });

    document.body.classList.replace("bg-light", "bg-dark");

    if (document.body.classList.contains("text-dark")) {
        document.body.classList.replace("text-dark", "text-light");
    } else {
        document.body.classList.add("text-light");
    }

    document.getElementById("moon").hidden = true;
    document.getElementById("sun").hidden = false;
}

function lightMode() {
    document.querySelectorAll(".bg-dark").forEach((element) => {
        element.className = element.className.replace(/-dark/g, "-light");
    });

    document.querySelectorAll(".text-light").forEach((element) => {
        element.className = element.className.replace(/-light/g, "-dark");
    });

    document.querySelectorAll(".btn-outline-secondary").forEach((element) => {
        element.className = element.className.replace("btn-outline-secondary", "btn-outline-dark");
    });

    document.querySelectorAll(".btn-close-white").forEach((element) => {
        element.className = element.className.replace("btn-close-white", "");
    });

    document.body.classList.replace("bg-dark", "bg-light");

    if (document.body.classList.contains("text-light")) {
        document.body.classList.replace("text-light", "text-dark");
    } else {
        document.body.classList.add("text-dark");
    }

    document.getElementById("moon").hidden = false;
    document.getElementById("sun").hidden = true;
}

function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        return "dark";
    }
    return "light";
}

window.onload = function () {
    if (getSystemDefaultTheme() === "dark") {
        darkMode();
    } else {
        lightMode();
    }
};
