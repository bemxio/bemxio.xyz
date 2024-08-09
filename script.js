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
        const cube = document.getElementById("cube");
        const face = document.getElementById("face");
        const subtitle = document.getElementById("subtitle");

        pop.play();

        cube.style.display = "block";
        face.style.display = "none";

        subtitle.textContent = "the bem cube";
    },
    "lorem": () => {
        let index = 0;
        
        pop.play();
        document.body.style.fontSize = "0.75em";

        document.body.querySelectorAll("*").forEach((element) => {
            if (element.children.length > 0 || !element.textContent) {
                return;
            }

            element.textContent = loremIpsum[index++ % loremIpsum.length];
        });
    }
};

// main stuff
let buffer = "";

document.addEventListener("keydown", (event) => {
    if (event.key.length !== 1) {
        return;
    }

    buffer += event.key.toLowerCase();

    if (buffer in cheatCodes) {
        cheatCodes[buffer]();
    }
});