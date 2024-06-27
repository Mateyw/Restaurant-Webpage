import './style.css';
import { loadInitialContent } from './loadContent.js'; //loadContent.js is the module and loadInitalContent is the function we impport from the module to use it in this index.js file
import { loadHome } from './loadHome.js';
import { loadMenu } from './loadMenu.js';
import { loadAbout } from './loadAbout.js';

const contentEl = document.getElementById('content');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

document.addEventListener('DOMContentLoaded', () => {
    try {
        loadInitialContent();
        console.log("Content loaded successfully")
    } catch (e) {
        console.log("Error loading content", e);
    }
}); // here we call the imported function as soon as the domcontent so the html has been loaded

homeBtn.addEventListener('click', () => {
    contentEl.innerHTML = ``;
    loadHome();
});


menuBtn.addEventListener('click', () => {
    contentEl.innerHTML = ``;
    loadMenu();
});


aboutBtn.addEventListener('click', () => {
    contentEl.innerHTML = ``;
    loadAbout();
});


