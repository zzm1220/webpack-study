import Header from './components/Header';
import Avator from './components/Avator';
import createFooter from './components/Footer';
import './styles/global.css';

console.log("hello!! zhimin!!");
const root = document.getElementById("root");

const header = new Header(root);
header.createHeader();
Avator(root);
createFooter(root);