export const getCoordinates = (luogo) => {
    fetch("conf.json").then(r => r.json()).then(confData => {
        fetch(confData.geoUrl.replace("$LUOGO", luogo)).then(r => r.json()).then(data => {
            console.log(data[0]);
            return ({name: data[0].display_name, cords: [data[0].lat,data[0].lon]});
        })
    })
}