var currentTheme = "light";

function darkMode(fre) {
    if (fre == null) {
        document.getElementById("moon").disabled = true;
        document.getElementById("sun").disabled = true;
    }

    if (currentTheme != "dark") blacklist = [];
    currentTheme = "dark";
    docSearch("bg-light", "bg-dark");
    docSearch("bg-dark", "bg-light");

    docSearch("text-dark", "text-light");
    docSearch("text-light", "text-dark");

    docSearch("btn-outline-dark", "btn-outline-secondary");
    docSearch("btn-outline-secondary", "btn-outline-dark");

    docSearch("btn-close", "btn-close btn-close-white");
    docSearch("btn-close btn-close-white", "btn-close");

    document.getElementById("moon").hidden = true;
    document.getElementById("sun").hidden = false;

    setTimeout(unFreezeToggle, 1000);
}

var blacklist = [];
function docSearch(f, t) {
    document.querySelectorAll("." + f).forEach((element) => {
        replaceClassWith(element, f, t);
    });
}
/**
 * 
 * @param {Element} e
 * @param {string} f 
 * @param {string} t 
 * @type void
 */
function replaceClassWith(e, f, t) {
    if (getBlacklistOf(e) != null) {
        var d = false;
        getBlacklistOf(e).forEach(a => {
            if (a == f) {
                d = true;
                return;
            }
        });
        if (d) return;
    }
    e.className = e.className.replaceAll(f, t);
    if (blacklist[e] == null) {
        blacklist.push([e, []]);
        getBlacklistOf(e).push(t);
    }
}
function getBlacklistOf(element) {
    var d = null;
    blacklist.forEach(a => {
        if (a[0] === element && d == null) {
            d = a[1];
        }
    });
    return d;
}

function lightMode(fre) {
    if (fre == null) {
        document.getElementById("moon").disabled = true;
        document.getElementById("sun").disabled = true;
    }

    if (currentTheme != "light") blacklist = [];
    currentTheme = "light";
    docSearch("bg-dark", "bg-light");
    docSearch("bg-light", "bg-dark");

    docSearch("text-light", "text-dark");
    docSearch("text-dark", "text-light");

    docSearch("btn-outline-secondary", "btn-outline-dark");
    docSearch("btn-outline-dark", "btn-outline-secondary");

    docSearch("btn-close btn-close-white", "btn-close");
    docSearch("btn-close", "btn-close btn-close-white");

    document.getElementById("moon").hidden = false;
    document.getElementById("sun").hidden = true;

    setTimeout(unFreezeToggle, 1000);
}

function unFreezeToggle() {
    document.getElementById("moon").disabled = false;
    document.getElementById("sun").disabled = false;
}

function getSystemDefaultTheme() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        return "dark";
    }
    return "light";
}

function loadTheme() {
    if (getSystemDefaultTheme() === "dark") {
        darkMode();
    } else {
        //lightMode(); already light mode
    }
}
window.onload = loadTheme;