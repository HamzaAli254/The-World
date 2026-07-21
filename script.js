// Search
let search = document.getElementById("search");
let cards = document.querySelectorAll(".card");
search.onkeyup = function () {
    let text = search.value.toLowerCase();
    for (let card of cards) {
        let name = card.dataset.name.toLowerCase();
        if (name.includes(text)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    }
};
//sort
let sort = document.getElementById("sort");
let container = document.querySelector(".data");
sort.onchange = function () {
    let cards = Array.from(container.children);
    cards.sort(function (a, b) {
        if (sort.value == "name") {
            return a.dataset.name.localeCompare(b.dataset.name);
        }
        if (sort.value == "population") {
            return b.dataset.population - a.dataset.population;
        }
        if (sort.value == "area") {
            return b.dataset.area - a.dataset.area;
        }
        if (sort.value == "countries") {
            return b.dataset.countries - a.dataset.countries;
        }
    });
    container.innerHTML = "";
    for (let card of cards) {
        container.appendChild(card);
    }
};


/////                 Country                     /////
// Search country
let search = document.getElementById("search-country");
let cards = document.querySelectorAll(".card");
search.onkeyup = function () {
    let text = search.value.toLowerCase();
    for (let card of cards) {
        let name = card.dataset.name.toLowerCase();
        if (name.includes(text)) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    }
};
//sort country
let sort = document.getElementById("sort-country");
let container = document.querySelector(".data");
sort.onchange = function () {
    let cards = Array.from(container.children);
    cards.sort(function (a, b) {
        if (sort.value == "name") {
            return a.dataset.name.localeCompare(b.dataset.name);
        }
        if (sort.value == "population") {
            return b.dataset.population - a.dataset.population;
        }
        if (sort.value == "area") {
            return b.dataset.area - a.dataset.area;
        }
    });
    container.innerHTML = "";
    for (let card of cards) {
        container.appendChild(card);
    }
};