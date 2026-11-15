const bg = document.querySelector("main #hero");

const heroCard = document.querySelector("main #hero .right .card-3d");

const purplePic = document.querySelector("main #hero .right .card-3d .reaction:nth-child(1)");
const pinkPic = document.querySelector("main #hero .right .card-3d .reaction:nth-child(2)");
const yellowPic = document.querySelector("main #hero .right .card-3d .reaction:nth-child(3)");
const greenPic = document.querySelector("main #hero .right .card-3d .reaction:nth-child(4)");

const name = document.querySelector("main #hero .left h1");
const button = document.querySelectorAll("main #hero .left .buttons button");
const buttonHover = document.querySelectorAll("main #hero .left .buttons button:hover");
const buttonActive = document.querySelectorAll("main #hero .left .buttons button:active");

const popupOverlay = document.querySelector(".popup-overlay");
const popup = document.querySelector(".popup-overlay .popup");
const saveS = document.querySelector("main #hero .left .buttons button:nth-child(2)");
const closeButton = document.querySelector(".popup .top h1");
const memories = document.querySelectorAll(".popup .carousel .memory");

const themes = ["pink-state", "yellow-state", "green-state"];

const variables = [bg, heroCard, purplePic, pinkPic, yellowPic, greenPic, name, popup, closeButton];
const listVariables = [button, buttonHover, buttonActive, memories];

purplePic.addEventListener("click", () => {

    for (let i = 0; i < listVariables.length; i++) {
        listVariables[i].forEach(button => {
            button.classList.remove(...themes)
        })
    }

    for (let i = 0; i < variables.length; i++) {
        variables[i].classList.remove(...themes);
    }

});

pinkPic.addEventListener("click", () => {

    for (let i = 0; i < listVariables.length; i++) {
        listVariables[i].forEach(button => {
            button.classList.remove(...themes)
        })
    }

    for (let i = 0; i < variables.length; i++) {
        variables[i].classList.remove(...themes);
    }

    // adding

    for (let i = 0; i < listVariables.length; i++) {
        listVariables[i].forEach(button => {
            button.classList.add("pink-state")
        })
    }

    for (let i = 0; i < variables.length; i++) {
        variables[i].classList.add("pink-state");
    }
});

yellowPic.addEventListener("click", () => {

    for (let i = 0; i < listVariables.length; i++) {
        listVariables[i].forEach(button => {
            button.classList.remove(...themes)
        })
    }

    for (let i = 0; i < variables.length; i++) {
        variables[i].classList.remove(...themes);
    }

    // adding
    for (let i = 0; i < listVariables.length; i++) {
        listVariables[i].forEach(button => {
            button.classList.add("yellow-state")
        })
    }

    for (let i = 0; i < variables.length; i++) {
        variables[i].classList.add("yellow-state");
    }
});

greenPic.addEventListener("click", () => {

    for (let i = 0; i < listVariables.length; i++) {
        listVariables[i].forEach(button => {
            button.classList.remove(...themes)
        })
    }

    for (let i = 0; i < variables.length; i++) {
        variables[i].classList.remove(...themes);
    }

    // adding
    for (let i = 0; i < listVariables.length; i++) {
        listVariables[i].forEach(button => {
            button.classList.add("green-state")
        })
    }

    for (let i = 0; i < variables.length; i++) {
        variables[i].classList.add("green-state");
    }
});

saveS.addEventListener("click", () => {
    popupOverlay.classList.add("open");
    popup.classList.add("open");
});

closeButton.addEventListener("click", () => {
    popupOverlay.classList.remove("open");
    popup.classList.remove("open");
})