export function listData(list, out){
    //console.log ("List:", list);
    out.innerHTML = "";
    let newDivs = "";
    for (let card of list) {
        //console.log(card);
        newDivs += `<div>
        <img src="${card.image}" alt="${card.name}">
        <h2>${card.name}</h2>
        <p>From: ${card.amiiboSeries}</p>
        <a href="./amiibo-details.html?id=${card.head}${card.tail}">Read More</a>
        </div>`;
    }
    out.innerHTML = newDivs;
}