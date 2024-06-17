// constants
const pop = new Audio("/assets/pop.mp3");
const loremIpsum = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
];

// cheat codes
const cheatCodes = {
    "3d": () => {
        const cube = document.getElementById("container-cube");
        const face = document.getElementById("container-face");
        const subtitle = document.getElementById("container-subtitle");

        pop.play();

        cube.style.display = "block";
        face.style.display = "none";

        subtitle.textContent = "the bem cube";
    },

    "lorem": () => {
        pop.play();

        const body = document.body;
        let index = 0;

        //body.style.setProperty("--transition-duration", "0s");
        body.style.setProperty("font-size", "0.75em");

        body.querySelectorAll("*").forEach((element) => {
            if (element.children.length > 0 || !element.textContent) {
                return;
            }

            element.textContent = loremIpsum[index % loremIpsum.length];
            index++;
        });
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