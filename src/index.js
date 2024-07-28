import './style.css';
import {ClearContent} from './ClearContent';
import {CreateHome} from './homeAssets/CreateHome';
import { NavButtonActions } from './NavButtonActions';

// Set Up Nav Bar Functions
const HomeButton = document.querySelector("#HomeButton");
HomeButton.addEventListener("click", function (e) {
    NavButtonActions(this.id)
})
const ContactButton = document.querySelector("#ContactButton");
ContactButton.addEventListener("click", function (e) {
    NavButtonActions(this.id)
})
const MenuButton = document.querySelector("#MenuButton");
MenuButton.addEventListener("click", function (e) {
    NavButtonActions(this.id)
})

// Initial Page Load
ClearContent();
CreateHome();

