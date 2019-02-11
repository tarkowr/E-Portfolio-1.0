const maxSmallScreen = 1024;
const scrollBarWidth = 17;
const AppState = Object.freeze({"MOBILE":"MOBILE", "DESKTOP":"DESKTOP"});

let currentState = AppState.DESKTOP;
let mobileToggle = false;
let links = document.getElementsByClassName('link');
let navIcon = document.getElementById("nav-bar");
let navbar = document.getElementById("navbar");

window.onload = function() {
    // Get user screen width and guess which device they are using
    if (window.innerWidth + scrollBarWidth <= maxSmallScreen){
        currentState = AppState.MOBILE;
    }

    SetupMobileNavBar();
};

// On screen resize, check if the user is switching between desktop and mobile and handle if true
window.onresize = function(){
    // User in Desktop
    if (window.innerWidth > maxSmallScreen){
        // User was in Mobile
        if(currentState == AppState.MOBILE){
            // Apply navbar styles for Desktop
            for(let i = 0; i < links.length; i++){
                links[i].style.display = "inline-block";
            }
            navbar.style.height = "75px";
        }
        currentState = AppState.DESKTOP;
    }

    //User in Mobile
    else{
        //User was in Desktop
        if(currentState == AppState.DESKTOP){
            //Apply navbar styles for Mobile
            for(let i = 1; i < links.length; i++){
                links[i].style.display = "none";
            }
        }
        currentState = AppState.MOBILE;
    }
}

//Hide or unhide nav bar options when the navbar is in mobile upon icon click
function SetupMobileNavBar(){
    let toggleLinks = function(){
        //Check if navbar items are displayed and hide them if true
        if(links[1].style.display == "block" || links[1].style.display == "inline-block"){
            for(let i = 1; i < links.length; i++){
                links[i].style.display = "none";
            }
            navbar.style.height = "75px";
        }

        //Display each navbar item
        else{
            for(let i = 1; i < links.length; i++){
                links[i].style.display = "block";
            }
            navbar.style.height = "150px";
        }
    };

    // Add click event listener to the navbar icon to toggle navbar items in Mobile view
    navIcon.addEventListener("click", function(){
        mobileToggle = true;
        toggleLinks();
    });

    // Add click event listener to each navbar item to toggle display on click
    Array.prototype.forEach.call(links, function(elem){
        elem.addEventListener("click", function(){
            if(mobileToggle){
                mobileToggle = false;
                toggleLinks();
            }
        });
    });
}