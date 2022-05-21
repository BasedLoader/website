const updates = document.getElementById("updates");
const newsT = document.getElementById("newsTitle");
const newsB = document.getElementById("newsBody");

async function getUpdates() {
    const response = await fetch("updates/updates.json", {
        mode: "same-origin",
        cache: "no-cache",
    });
    return response.json();
}

initalize(); // U.S. spelling as per convention
var cachedUpdates = null;
async function initalize() {
    const updatesJSON = await getUpdates();
    var update = ``;
    var i = 0;
    updatesJSON.forEach(element => {
        if (i >= 2) return;
        const title = element.title;
        const content = element.content;
        var toInsert = `<div class="col-md-6"><div class="h-100 p-5 bg-light border rounded-3"><h2>`;
        toInsert += title;
        toInsert += `</h2>`;
        toInsert += content;
        toInsert += `<button type="button" onclick="setNews(${i})" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#news">Read More</button>`;
        toInsert += `</div></div>`;
        update += toInsert;
        i++;
    });
    cachedUpdates = updatesJSON;
    updates.innerHTML = update;
    loadTheme();
}

function setNews(i) {
    const title = cachedUpdates[i].title;
    const content = cachedUpdates[i].content;
    newsT.innerHTML = title;
    newsB.innerHTML = content;
}