// Import stylesheets
import './style.css';
//var MYAPP = require('./Module/myapp').MYAPP;
console.log(MYAPP);
// Write Javascript code!
const appDiv = document.getElementById('app');

let MYAPP = MYAPP || { init:'JS Starter'};

appDiv.innerHTML = `<h1>${MYAPP.init}</h1>`;