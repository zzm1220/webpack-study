export default function createFooter(root) {
    const divElem = document.createElement("div");
    divElem.classList.add("iconfont");
    divElem.classList.add("icon-search");
    root.appendChild(divElem);
}