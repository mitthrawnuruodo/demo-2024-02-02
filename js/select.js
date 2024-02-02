import { listData } from "./utils.js"

const chosenOne = document.getElementById("amiiboSelector");
chosenOne.addEventListener("change", collectCards);

async function collectCards() {
    const query = chosenOne.value;
    console.log(query);
    const outElement = document.getElementById("container");

    if (query !== "none") {
        outElement.innerHTML = "Loading...";
        try {
            const api = `https://www.amiiboapi.com/api/amiibo/?character=${query}`;

            const response = await fetch(api);
            const data = await response.json();
 
            if (data.amiibo.length > 0){
                console.log(data, data.amiibo.length, data.amiibo, outElement);
                listData (data.amiibo, outElement);
            } else {
                outElement.innerHTML = `Cannot find any characters named ${query}`;
            }
        } catch (error) {
            outElement.innerHTML = `Could not fetch ${query}, please try another`;
        }
    } else {
        outElement.innerHTML = "Please select a character";
    }

}
