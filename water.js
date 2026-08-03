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
//////          SeaS         /////
//Sooort
let seaSort = document.getElementById("sort-sea");
let seaContainer = document.querySelector("#seas .data");
seaSort.onchange = function () {
    let cards = Array.from(seaContainer.children);
    cards.sort(function (a,b) {
        if (seaSort.value == "name") {
            return a.dataset.name.localeCompare(b.dataset.name);
        }
        if (seaSort.value == "area") {
            return b.dataset.area - a.dataset.area;
        }
        if (seaSort.value == "depth") {
            return b.dataset.depth - a.dataset.depth;
        }
    });
    seaContainer.innerHTML = "";
    for (let card of cards) {
        seaContainer.appendChild(card);
    }
};
// Search & Filter together
let seaSearch = document.getElementById("search-sea");
let oceanFilter = document.getElementById("filter-ocean");
let seaCards = document.querySelectorAll("#seas .card");
function updateSeas() {
    let text = seaSearch.value.toLowerCase();
    let ocean = oceanFilter.value;
    for (let card of seaCards) {
        let name = card.dataset.name.toLowerCase();
        if (name.includes(text)) {
            if (ocean == "all" || card.dataset.ocean == ocean) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        }
        else {
            card.style.display = "none";
        }
    }
}
seaSearch.onkeyup = updateSeas;
oceanFilter.onchange = updateSeas;
// Show more btn
let showSeaCards = document.querySelectorAll("#seas .card");
let button = document.getElementById("show-more");
let visibleCards = 6;
for (let i = visibleCards; i < showSeaCards.length; i++) {
    showSeaCards[i].style.display = "none";
}
button.onclick = function () {
    visibleCards = visibleCards + 6;
    for (let i = 0; i < visibleCards; i++) {
        if (i < showSeaCards.length) {
            showSeaCards[i].style.display = "block";
        }
    }
    if (visibleCards >= showSeaCards.length) {
        button.style.display = "none";
    }
};
