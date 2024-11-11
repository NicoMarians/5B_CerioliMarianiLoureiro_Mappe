import{upload,download} from "./cache.js";
import {getCoordinates} from "./functions.js";
import {createForm} from "./components.js";

let places = [
    {
       name: "Piazza del Duomo",
       coords: [45.4639102, 9.1906426]
    },
    {
       name: "Darsena",
       coords: [45.4536286, 9.1755852]
    },
    {
       name: "Parco Lambro",
       coords: [45.4968296, 9.2505173]
    },
    {
       name: "Stazione Centrale",
       coords: [45.48760768, 9.2038215]
    }
 ];

download().then((data) => {places = data});

const form = createForm (document.getElementById("form"));
form.setLabels([["Luogo","text"]]);
form.setCallback(getCoordinates);
form.render();

 let zoom = 12;
 let maxZoom = 19;
 let map = L.map('map').setView(places[0].coords, zoom);
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: maxZoom,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);
 places.forEach((place) => {
    const marker = L.marker(place.coords).addTo(map);
    marker.bindPopup(`<b>${place.name}</b>`);
 });