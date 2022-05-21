`<div class="col-md-12 pb-3">
<div class="h-100 p-5 bg-light border rounded-3">
    <h2>Our work merging Forge & Fabric</h2>
    <p>We have been working hard to remove the barrier between the two main competing mod loaders.
        Currently, support is very limited for some fabric mods due to mixin issues and Forge's mod
        class loading being broken, but is a big step in the direction towards one mod loader for all
        mods.</p>
    <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#news1">Read
        More
    </button>
</div>
</div>`;
const updates = document.getElementById("updates");
async function getUpdates() {
    const response = await fetch("updates.json", {
        mode: "same-origin",
        cache: "no-cache",
    });
    return response.json();
}

e();
var g = null;
async function e() {
    const f = await getUpdates();
    var update = ``;
    var i = 0;
    f.forEach(element => {
        const title = element.title;
        const content = element.content;
        var c = `<div class="col-md-12 pb-3"><div class="h-100 p-5 bg-light border rounded-3"><h2>`;
        c += title;
        c += `</h2>`;
        c += content;
        c += `<button type="button" onclick="setNews(${i})" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#news">Read More</button>`;
        c += `</div></div>`;
        update += c;
        i++;
    });
    g = f;
    updates.innerHTML = update;
}

function setNews(i) {
    const newsT = document.getElementById("newsTitle");
    const newsB = document.getElementById("newsBody");
    const title = g[i].title;
    const content = g[i].content;
    newsT.innerHTML = title;
    newsB.innerHTML = content;
}