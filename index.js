// Import stylesheets
import './style.css';
import Base from './Module/base.js';
var MYAPP = require('./Module/myapp');
console.log(MYAPP);
// Write Javascript code!
const appDiv = document.getElementById('app');

let MYAPP = MYAPP || { init:'JS Starter'};

let base = new Base();
base.getName('Base');
appDiv.innerHTML = `<h1>${JSON.stringify(MYAPP)}</h1>`;
appDiv.innerHTML = `<h1>${base.name}</h1>`;

