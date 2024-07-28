import { CreateDivElement } from "../CreateDivElement";
import { CreateImgElement } from "../CreateImgElement";
import Steak2 from '../homeAssets/Steak2.jpg';
import DiningImage from '../homeAssets/cutlery.jpg';
import LocationImage from '../homeAssets/outdoors1.jpg';

const welcomeText = "Welcome to The Grill House bar and grill. An experience that leaves you salivating for another bite.";
const diningText = "Sample our fantastic sides, followed by the main course of triple A grade steak that is sure to get you MOOving";
const locationText = "We can be found at:\r\n 123 Fake Street, Fake Town, \r\n Fake Postcode, Fake State, \r\n Fairy Tale Country."



export function CreateHome(){
    var contentcontainer = document.querySelector('#content');
    var homeFrame = CreateDivElement("HomeContainer", contentcontainer);
    // section 1
    var welcomeSectionFrame = CreateDivElement("WelcomeSectionFrame", homeFrame)
    var welcomeTextFrame = CreateDivElement("WelcomeTextFrame", welcomeSectionFrame);
    welcomeTextFrame.textContent = welcomeText;
    var welcomeImage = CreateImgElement("WelcomeImage", welcomeSectionFrame, Steak2);
    // section 2
    var diningSectionFrame = CreateDivElement("DiningSectionFrame", homeFrame);
    var diningImage = CreateImgElement("DiningImage", diningSectionFrame, DiningImage);
    var diningTextFrame = CreateDivElement("DiningTextFrame", diningSectionFrame);
    diningTextFrame.textContent = diningText;
    // section 3
    var locationSectionFrame = CreateDivElement("LocationSectionFrame", homeFrame);
    var locationTextFrame = CreateDivElement("LocationTextFrame", locationSectionFrame);
    locationTextFrame.textContent = locationText;
    var locationImage = CreateImgElement("LocationImage", locationSectionFrame, LocationImage)


}