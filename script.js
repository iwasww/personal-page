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

const tabs = document.querySelectorAll(".top-buttons button");
const panels = document.querySelectorAll("#about-me .panel");
const aboutMe = document.getElementById("about-me");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        panels.forEach((panel) => panel.classList.toggle("active", panel.id === tab.dataset.panel));
        tabs.forEach((t) => t.classList.toggle("selected", t === tab));

        aboutMe.dataset.theme = tab.id;
    });
});

const favTabs = document.querySelectorAll("#favorites-sec .upper-buttons button");
const favPanels = document.querySelectorAll("#favorites-sec .fav-panel");

favTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        favPanels.forEach((panel) => panel.classList.toggle("active", panel.id === tab.dataset.fav));
        favTabs.forEach((t) => t.classList.toggle("selected", t === tab));
    });
});

// play song
const playHG = document.querySelector("#favorites-sec #fav-song .disc #ultrasound button");
const playF = document.querySelector("#favorites-sec #fav-song .disc #juanes button");
const playAM = document.querySelector("#favorites-sec #fav-song .disc #am button");
const playOOTG = document.querySelector("#favorites-sec #fav-song .disc #tbdt button");

const hulaGirl = new Audio('assets/audios/hula-girl.mp3');
const fotografia = new Audio('assets/audios/fotografia.mp3');
const doIWannaKnow = new Audio('assets/audios/do-i-wanna-know.mp3');
const oneOfThoseGirls = new Audio('assets/audios/one-of-those-girls.mp3');

const playButtons = [playHG, playF, playAM, playOOTG];
const songs = [hulaGirl, fotografia, doIWannaKnow, oneOfThoseGirls];

function playSong(button, audio) {
    button.addEventListener("click", () => {
        if (audio.paused) {
            audio.play();
            button.textContent = "⏸";
        } else {
            audio.pause();
            button.textContent = "▶";
        }
    })
}

for (let i = 0; i < playButtons.length; i++) {
    playSong(playButtons[i], songs[i]);
}