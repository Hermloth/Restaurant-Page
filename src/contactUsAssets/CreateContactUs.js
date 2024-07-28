import { CreateDivElement } from '../CreateDivElement';
import { CreateImgElement } from '../CreateImgElement';
import ContactImage from '../contactUsAssets/contact-us.jpg';

const contactText = "You can contact us at (99) 9999 9999"

export function CreateContactUs (){
    var contentcontainer = document.querySelector('#content');
    var contactFrame = CreateDivElement("ContactContainer", contentcontainer);
    // section 1
    var contactSectionFrame = CreateDivElement("ContactSectionFrame", contactFrame);
    var contactTextFrame = CreateDivElement("ContactTextFrame", contactSectionFrame);
    contactTextFrame.textContent = contactText;
    var contactImage = CreateImgElement("ContactImage", contactSectionFrame, ContactImage);
}
