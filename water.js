// Waterrr //
//////                                      Oceans                                       ////////
// Search
let oceanSearch = document.getElementById("search-ocean");
let oceanCards = document.querySelectorAll("#oceans .card");
oceanSearch.onkeyup = function () {
    let text = oceanSearch.value.toLowerCase();
    for (let card of oceanCards) {
        let name = card.dataset.name.toLowerCase();
        if (name.includes(text)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    }
};
// Sort
let oceanSort = document.getElementById("sort-ocean");
let oceanContainer = document.querySelector("#oceans .data");
oceanSort.onchange = function () {
    let cards = Array.from(oceanContainer.children);
    cards.sort(function (a, b) {
        if (oceanSort.value == "name") {
            return a.dataset.name.localeCompare(b.dataset.name);
        }
        if (oceanSort.value =="area") {
            return b.dataset.area - a.dataset.area;
        }
        if (oceanSort.value =="depth") {
            return b.dataset.depth - a.dataset.depth;
        }
    });
    oceanContainer.innerHTML = "";
    for (let card of cards) {
        oceanContainer.appendChild(card);
    }
};