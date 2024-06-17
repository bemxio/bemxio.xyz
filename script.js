// constants
const cube = document.getElementById("container-cube");
const face = document.getElementById("container-face");
const subtitle = document.getElementById("container-subtitle");

const pop = new Audio("/assets/pop.mp3");

// cheat codes
const cheatCodes = {
    "3d": () => {
        pop.play();

        cube.style.display = "block";
        face.style.display = "none";

        subtitle.textContent = "the bem cube";
    }
};

// main stuff
let buffer = "";

document.addEventListener("keydown", (event) => {
    if (event.key.length !== 1) {
        return;
    }

    buffer += event.key;

    if (buffer in cheatCodes) {
        cheatCodes[buffer]();
    }
});