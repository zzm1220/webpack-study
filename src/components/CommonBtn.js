import style from './btn.scss';
console.log(style);

export default function createBtn(root) {
    const btn = document.createElement("button");
    btn.innerHTML = "新增divdd";
    root.appendChild(btn);
    btn.onclick = function() {
        const divElem = document.createElement("div");
        divElem.classList.add(style.new);
        divElem.innerHTML = "new elem";
        root.appendChild(divElem);
    }
}