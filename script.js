function megj(napok){
    let naptar = document.getElementById("ki");
    
    let hely = 0;
    for(let i =1;i<6;i++){
        let tr= document.createElement("tr");   
        for(let j = 1; j<8;j++){
            let nap = document.createElement("td");
            if(napok[hely] != undefined){
                nap.innerHTML=napok[hely];
            }
            else{
                nap.innerHTML="";
            }
            tr.appendChild(nap);
            hely++;
        }
        naptar.appendChild(tr);
    }
    
}
megj(alakit(honapmegkap(2024,11)))

function honapmegkap(ev, honap) {
    const honapindex = honap - 1;
    const datum = new Date(ev, honapindex, 1);
    const veg = [];
    const napnevek = ['V','H', 'K', 'Sze', 'Cs', 'P', 'Szo',];

    while (datum.getMonth() === honapindex) {
        veg.push({
            nap: datum.getDate(),
            napnev: napnevek[datum.getDay()]
        });
        datum.setDate(datum.getDate() + 1);
    }
    return veg;
}

function alakit(tomb){
    let alakitott=[];
    if(tomb[0].napnev=="P"){
        alakitott = ["","","",""];
        tomb.forEach(element => {
            alakitott.push(element.nap)
        });
    }
    if(tomb[0].napnev=="Szo"){
         alakitott = ["","","","",""];
        tomb.forEach(element => {
            alakitott.push(element.nap)
        });
    }
    if(tomb[0].napnev=="V"){
        alakitott = ["","","","","",""];
        tomb.forEach(element => {
            alakitott.push(element.nap)
        });
    }
    if(tomb[0].napnev=="H"){
        alakitott = [];
        tomb.forEach(element => {
            alakitott.push(element.nap)
        });
    }
    if(tomb[0].napnev=="K"){
        alakitott = [""];
        tomb.forEach(element => {
            alakitott.push(element.nap)
        });
    }
    if(tomb[0].napnev=="Sze"){
        alakitott = ["","",];
        tomb.forEach(element => {
            alakitott.push(element.nap)
        });
    }
    if(tomb[0].napnev=="Cs"){
        alakitott = ["","","",];
        tomb.forEach(element => {
            alakitott.push(element.nap)
        });
    }
    return alakitott;
}
