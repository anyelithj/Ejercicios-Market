import { data } from "../db/data.js";

let entryYear = document.getElementById("year");
let name = document.getElementById("nameUser");
let result = document.getElementById("result");
let btn = document.getElementById("button");
let btnGen = document.getElementById("button_generator");
let yearRandom = document.getElementById("num");
let bodyTable = document.getElementById("bodyTable");
let life = "";
let resultPlay = "";
let year = [];
let userPlays = [];
let dbRandom = "";

data.forEach((item) => {
  year.push(item.year);
});
// console.log(year);
btnGen.addEventListener("click", (e)=> {
  dbRandom = Math.floor(Math.random() * year.length);
  yearRandom.textContent = year[dbRandom];
})



btn.addEventListener("click", (e) => {
  e.preventDefault();
  userPlays.push({
    name: name.value,
    year: Number(entryYear.value),
  });
  
  valation(userPlays);
  showTable(userPlays)
  
});

let valation = () => {
  let yearComp = "";
  let difference = "";
  life = 7;
  userPlays.forEach((item) => {
    console.log(typeof(year[dbRandom]) + " " + year[dbRandom])
    console.log(typeof (item.year) + " " + item.year)

   if( life > 0) {
    difference = item.year - year[dbRandom];
    let help =
      difference < 100
        ? "La diferencia es menor a 100"
        : "la diferencia es mayor a 100";
    yearComp =
      item.year === year[dbRandom]
        ? "¡Adivinaste amigo!"
        : item.year > year[dbRandom]
        ? `El numero ingresado es Mayor / ${help} / vidas ${--life}`
        : `El numero ingresado es Menor / ${help} / vidas ${--life}`;
        item.life = life
        resultPlay = (life === 0)? alert('Game Over'): ''
        console.log(item)
      }
       
    });
    alert(yearComp);
    clearForm();
    console.log(resultPlay)
     
};
let clearForm = () =>{
  entryYear = "";
  name = ""
}
let showTable = (item) => {
    // alert('Game Over')
    bodyTable.innerHTML = "";
    item.forEach(element => {
        const {name,life} = element;
        bodyTable.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${life}</td>
            </tr>
        `
    })
}



console.log(userPlays);

