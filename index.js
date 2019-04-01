// Import stylesheets
import './style.css';
var MYAPP = require('./Module/myapp');
console.log(MYAPP);
// Write Javascript code!
const appDiv = document.getElementById('app');

let MYAPP = MYAPP || { init:'JS Starter'};

appDiv.innerHTML = `<h1>${JSON.stringify(MYAPP)}</h1>`;