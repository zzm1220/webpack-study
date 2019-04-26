 export default function couter(root) {
    const divElem = document.createElement("div");
    divElem.innerHTML = 1;
    root.appendChild(divElem);
    divElem.onclick = function() {
        divElem.innerHTML = parseInt(divElem.innerHTML, 10) + 1;
    }
}