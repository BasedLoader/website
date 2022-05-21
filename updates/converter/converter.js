const uTitle = document.getElementById("tbt");
const uTBox = document.getElementById("tb");
const uPrv = document.getElementById("prv");
const jBtn = document.getElementById("txjn");
var lastT = "";
var lastB = "";
const comma = true;

uTitle.addEventListener("change", event => {
    //refreshPreview();
    lastT = uTitle.value;
});

uTBox.addEventListener("change", event => {
    //refreshPreview();
    lastB = uTBox.value;
});

jBtn.addEventListener("click", event => {
    //refreshPreview();
    exportToJSON()
});

setTimeout(refreshPreview, 10);
function refreshPreview() {
    var setBackToDark = false;
    if (currentTheme == "dark") {
        lightMode();
        setBackToDark = true;
    }
    const title = uTitle.value;
    const box = uTBox.value;
    var box2 = `<div class="modal-body">`;
    box2 += box;
    box2 += `</div>`;
    var title2 = "<h2>";
    title2 += title;
    title2 += "</h2>";
    var full = title2+box2;
    var btn = `<button class="btn btn-outline-dark" type="button">Read More</button>`;
    if (currentTheme == "dark") btn = btn.replaceAll("btn-outline-dark", "btn-outline-secondary");
    full+= btn;
    uPrv.innerHTML = full;
    if (setBackToDark) darkMode();
    if (lastT == uTitle.value && lastB == uTBox.value) {
        setTimeout(refreshPreview, 1000);
        return;
    }
    setTimeout(refreshPreview, 10);
}

function exportToJSON() {
    const title = uTitle.value;
    const box = uTBox.value;
    const json = {"title": title, "content": box};
    navigator.clipboard.writeText(JSON.stringify(json) + (comma ? "," : ""));
}