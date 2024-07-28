import './style.css';
import {ClearContent} from './ClearContent';
import {CreateHome} from './homeAssets/CreateHome';
import {NavButtonActions} from './NavButtonActions';

// Set Up Nav Bar Functions
const HomeButton = document.getElementById("HomeButton");
HomeButton.addEventListener("click", function (e) {
    NavButtonActions(this.id)
})
const ContactButton = document.getElementById("ContactButton");
ContactButton.addEventListener("click", function (e) {
    NavButtonActions(this.id)
})
const MenuButton = document.getElementById("MenuButton");
MenuButton.addEventListener("click", function (e) {
    NavButtonActions(this.id)
})

// Initial Page Load
ClearContent();
CreateHome();
ContactButton.style.backgroundColor = "var(--PrimaryColour)"
MenuButton.style.backgroundColor = "var(--PrimaryColour)"
