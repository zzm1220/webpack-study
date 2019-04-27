import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header';
import Avator from './components/Avator';
import createFooter from './components/Footer';
import createBtn from './components/CommonBtn';
import couter from './components/couter';
import number from './components/number';
import './styles/global.css';

console.log("hello!! zhimin!!");
const root = document.getElementById("root");

const header = new Header(root);
header.createHeader();
Avator(root);
createFooter(root);
createBtn(root);
couter(root);
number(root);


const arr = [
    new Promise(()=>{}),
    new Promise(()=>{})
];
arr.map((item)=>{
    console.log(item)
})

if(module.hot) {
    module.hot.accept("./components/number.js", ()=>{
        root.removeChild(document.getElementById("number"));
        number(root);
    })
}