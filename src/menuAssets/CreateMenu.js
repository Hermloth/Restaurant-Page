import { CreateDivElement } from '../CreateDivElement';
import { CreateImgElement } from '../CreateImgElement';

import SteakImage from '../menuAssets/Steak3.jpg';
import ChipsImage from '../menuAssets/chips.jpg';
import VegtableImage from '../menuAssets/vegtables.jpg';

const menuText = "Take a look at our salivating menu!";
const menuTextItems = ["Steak","Chips","Vegtables"];
const menuImageItems = [SteakImage, ChipsImage, VegtableImage];

export function CreateMenu(){
    var contentcontainer = document.querySelector('#content');
    var menuFrame = CreateDivElement("MenuContainer", contentcontainer);
    var menuTextholder = CreateDivElement("MenuText", menuFrame);
    menuTextholder.textContent = menuText;

    var menuHolder = CreateDivElement("MenuHolder", menuFrame);

    for (var i = 0; i < menuTextItems.length; i++){
        var element = CreateDivElement("MenuItem", menuHolder);
        var textSubElement = CreateDivElement("MenuSubElement", element);
        textSubElement.textContent = menuTextItems[i];
        var imageSubElement = CreateImgElement("ImageSubElement", element, menuImageItems[i]);
    }
}