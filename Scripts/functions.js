const getCoordinates = (luogo) => {
    fetch("conf.json").then(r => r.json()).then(confData => {
        fetch(confData.geoUrl.replace("$LUOGO", luogo)).then(r => r.json()).then(data => {
            console.log(data);
        })
    })
}