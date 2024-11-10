let data = {};


let url;
let token;
let key;
let geoUrl;

fetch("conf.json").then(r =>r.json()).then(confData => {
    url = confData.url;
    token = confData.token;
    key = confData.key;
    geoUrl = confData.geoUrl;
})