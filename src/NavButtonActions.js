import { CreateHome } from "./homeAssets/CreateHome.js";
import { CreateMenu } from "./menuAssets/CreateMenu.js";
import { CreateContactUs } from "./contactUsAssets/CreateContactUs.js";
import { ClearContent } from "./ClearContent.js";

export function NavButtonActions(event){
switch (event){
case "HomeButton":
    ClearContent();
    CreateHome();
    console.log("Home Button Pressed"); // Remove at end
    break;
case "ContactButton":
    ClearContent();
    CreateContactUs();
    console.log("Contact Button Pressed"); // Remove at end
    break;
case "MenuButton":
    ClearContent();
    CreateMenu();
    console.log("Menu Button Pressed"); // Remove at end
    break;
default:
    console.log("Button Error")
}
}