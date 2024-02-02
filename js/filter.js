import { listData } from "./utils.js"

let collection = [];
const outElement = document.getElementById("container");

async function collectCards() {
    try {
        const api = `https://www.amiiboapi.com/api/amiibo/`;
        const response = await fetch(api);
        const data = await response.json();
        //console.log(data);
        collection = data.amiibo;
        listData (collection, outElement);
    } catch (error) {
        outElement.innerHTML = `Could not fetch data...`;
    }
}

collectCards();

const inputField = document.getElementById("queryString");
inputField.addEventListener("keyup", filterCards);

function filterCards () {
    const filterQuery = inputField.value;
    //console.log(filterQuery);

    const filtered = collection.filter((card)=>{
        //console.log(card.name, filterQuery);
        //console.log(card.name.toUpperCase().indexOf(filterQuery.toUpperCase()) > -1);
        return card.name.toUpperCase().indexOf(filterQuery.toUpperCase()) > -1;
    });
    console.log (collection.length, filtered.length);

    listData (filtered, outElement);

}