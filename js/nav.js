/**
 * NOTE: This is not the best way to add a menu, 
 * but it does work...kind of.
 */

const navElement = document.querySelector("nav#menu");
makeMenu(navElement);

function makeMenu(nav) {
    const links = `
    <ul>
        <li><a href="amiibo-select.html">Amiibo Selector</a></li>
        <li><a href="amiibo-filter.html">Amiibo Filter Search</a></li>
    </ul>`;
    nav.innerHTML = links;
}