
export function ChangeTab(inputId){
    //const HomeButton = document.querySelector("#HomeButton");
    const HomeButton = document.getElementById("HomeButton");
    const contactButton = document.getElementById("ContactButton");
    const menuButton = document.getElementById("MenuButton");
    
    switch (inputId){
        case "HomeButton":
            HomeButton.style.backgroundColor = "var(--TertiaryColour)";
            contactButton.style.backgroundColor = "var(--PrimaryColour)";
            menuButton.style.backgroundColor = "var(--PrimaryColour)";
            break;
        case "ContactButton":
            HomeButton.style.backgroundColor = "var(--PrimaryColour)";
            contactButton.style.backgroundColor = "var(--TertiaryColour)";
            menuButton.style.backgroundColor = "var(--PrimaryColour)";
            break;
        case "MenuButton":
            HomeButton.style.backgroundColor = "var(--PrimaryColour)";
            contactButton.style.backgroundColor = "var(--PrimaryColour)";
            menuButton.style.backgroundColor = "var(--TertiaryColour)";
            break;
        default:
            console.log("CSS Error");
    }
    
    
    
    console.log(inputId);
}