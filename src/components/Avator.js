import avatar from '../styles/images/avatar.jpg';
import style from '../styles/style.scss';
console.log(style)

export default function Avator(root) {
    const img = new Image();
    img.src = avatar;
    img.classList.add(style.avatar);
    root.appendChild(img);
}