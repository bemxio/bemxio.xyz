// constants
const pop = new Audio("/assets/pop.mp3");

const moveSpeed = 5;
const turnSpeed = 5;
const accelerationSpeed = 0.1;

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
    "arrowuparrowuparrowdownarrowdownarrowleftarrowrightarrowleftarrowrightba": () => {
        const spaceship = document.getElementById("spaceship");
        const subtitle = document.getElementById("subtitle");

        const effect = document.getElementById("spaceship-effect");
        const sound = new Audio("assets/spaceship_engine_sound.mp3"); // synthetic low-rev engine.wav by Timbre -- https://freesound.org/s/115271/ -- License: Attribution NonCommercial 4.0

        let x = window.innerWidth / 2;
        let y = window.innerHeight / 4;
        let rotation = 0;

        let acceleration = 0.0;

        let upPressed = false;
        let downPressed = false;
        let leftPressed = false;
        let rightPressed = false;

        pop.play();

        spaceship.style.display = "block";
        subtitle.textContent = "fly around the page!";

        sound.loop = true;

        document.addEventListener("keydown", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    upPressed = true; break;
                case "ArrowDown":
                    downPressed = true; break;
                case "ArrowLeft":
                    leftPressed = true; break;
                case "ArrowRight":
                    rightPressed = true; break;
            }
        });
        document.addEventListener("keyup", (event) => {
            switch (event.key) {
                case "ArrowUp":
                    upPressed = false; break;
                case "ArrowDown":
                    downPressed = false; break;
                case "ArrowLeft":
                    leftPressed = false; break;
                case "ArrowRight":
                    rightPressed = false; break;
            }
        });

        setInterval(() => {
            if (upPressed) {
                acceleration = Math.max(-1.0, acceleration - accelerationSpeed);
            } else if (downPressed) {
                acceleration = Math.min(1.0, acceleration + accelerationSpeed);
            }

            x -= moveSpeed * Math.sin(rotation * Math.PI / 180) * acceleration;
            y += moveSpeed * Math.cos(rotation * Math.PI / 180) * acceleration;

            if (leftPressed) {
                rotation -= turnSpeed;
            } else if (rightPressed) {
                rotation += turnSpeed;
            }

            if (acceleration > 0) {
                acceleration = Math.max(0, acceleration - (accelerationSpeed / 2));
            } else if (acceleration < 0) {
                acceleration = Math.min(0, acceleration + (accelerationSpeed / 2));
            }

            spaceship.style.left = `${x}px`;
            spaceship.style.top = `${y}px`;
            spaceship.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;

            if (upPressed || downPressed) {
                effect.style.backgroundPosition = `-48px -48px`;
                sound.play();
            } else {
                effect.style.backgroundPosition = `0 0`;
                sound.pause();
            }
        }, 1000 / 60);
    }
};

// main stuff
let buffer = "";

document.addEventListener("keydown", (event) => {
    buffer += event.key.toLowerCase();

    if (buffer in cheatCodes) {
        cheatCodes[buffer]();
    }
});