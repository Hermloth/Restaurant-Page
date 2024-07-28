import { CreateHome } from "./homeAssets/CreateHome.js";
import { CreateMenu } from "./menuAssets/CreateMenu.js";
import { CreateContactUs } from "./contactUsAssets/CreateContactUs.js";
import { ClearContent } from "./ClearContent.js";
import { ChangeTab } from "./ChangeTab.js";

export function NavButtonActions(event){
switch (event){
case "HomeButton":
    ClearContent();
    CreateHome();
    ChangeTab(event);
    console.log("Home Button Pressed"); // Remove at end
    break;
case "ContactButton":
    ClearContent();
    CreateContactUs();
    ChangeTab(event);
    console.log("Contact Button Pressed"); // Remove at end
    break;
case "MenuButton":
    ClearContent();
    CreateMenu();
    ChangeTab(event);
    console.log("Menu Button Pressed"); // Remove at end
    break;
default:
    console.log("Button Error")
}
}