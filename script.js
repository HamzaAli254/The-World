// Land //
//            Continent        //
// Search
let continentsearch = document.getElementById("search");
let continentcards = document.querySelectorAll("#continents .card");
continentsearch .onkeyup = function () {
    let text = continentsearch.value.toLowerCase();
    for (let card of continentcards) {
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
let continentsort = document.getElementById("sort");
let continentcontainer = document.querySelector("#continents .data");
continentsort.onchange = function () {
    let cards = Array.from(continentcontainer.children);
    cards.sort(function (a, b) {
        if (continentsort.value == "name") {
            return a.dataset.name.localeCompare(b.dataset.name);
        }
        if (continentsort.value == "population") {
            return b.dataset.population - a.dataset.population;
        }
        if (continentsort.value == "area") {
            return b.dataset.area - a.dataset.area;
        }
        if (continentsort.value == "countries") {
            return b.dataset.countries - a.dataset.countries;
        }
    });
    continentcontainer.innerHTML = "";
    for (let card of cards) {
        continentcontainer.appendChild(card);
    }
};


/////                 Country                     /////
// Search country
let countrysearch = document.getElementById("search-country");
let countrycards = document.querySelectorAll("#countries .card");
countrysearch.onkeyup = function () {
    let text = countrysearch.value.toLowerCase();
    for (let card of countrycards) {
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
let countrysort = document.getElementById("sort-country");
let countrycontainer = document.querySelector("#countries .data");
countrysort.onchange = function () {
    let cards = Array.from(countrycontainer.children);
    cards.sort(function (a, b) {
        if (countrysort.value == "name") {
            return a.dataset.name.localeCompare(b.dataset.name);
        }
        if (countrysort.value == "population") {
            return b.dataset.population - a.dataset.population;
        }
        if (countrysort.value == "area") {
            return b.dataset.area - a.dataset.area;
        }
    });
    countrycontainer.innerHTML = "";
    for (let card of cards) {
        countrycontainer.appendChild(card);
    }
};
// Filter
let continentFilter = document.getElementById("filter-continent");
let governmentFilter = document.getElementById("filter-government");
let cards = document.querySelectorAll("#countries .card");
function filterCards() {
    for (let card of cards) {
        let continent = card.dataset.continent;
        let government = card.dataset.government;
        let continentMatch = continentFilter.value == "all" || continent == continentFilter.value;
        let governmentMatch = governmentFilter.value == "all" || government == governmentFilter.value;
        if (continentMatch && governmentMatch) {
            card.style.display = "block";
        }
        else {
            card.style.display = "none";
        }
    }
}
continentFilter.onchange = filterCards;
governmentFilter.onchange = filterCards;
