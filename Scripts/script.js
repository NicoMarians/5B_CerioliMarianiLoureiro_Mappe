import{upload,download} from "./cache.js";
import {getCoordinates} from "./functions.js";
import {createForm,renderMap} from "./components.js";

let places = [];

download().then((data) => {places = data});

const form = createForm (document.getElementById("form"));
form.setLabels([["Luogo","text"]]);
form.render();
form.setCallback(getCoordinates);

renderMap();




