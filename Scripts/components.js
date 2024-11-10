const createForm=(cuh)=>{
    let data;
    let element=cuh;
    let callback;
    return{
        setLabels: (labels) => { data = labels; },
        setCallback: (f) => { callback = f; },
        render: () => { 
            element.innerHTML=data.map((line)=>`<div>${line[0]}<input id="${line[0]}" type="${line[1]}"></div>`).join("");
            element.innerHTML += `<button type="button" id="invia"> Invia </button>`;  
            document.getElementById("invia").onclick = () => {
                const result = data.map((name) => {return document.getElementById(name[0]).value});
                callback(result);
            }
        },        
    };
};

