// constants
const pop = new Audio("/assets/pop.mp3");
const speed = 5;

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
        const player = document.getElementById("player");
        
        let upPressed = false;
        let downPressed = false;
        let leftPressed = false;
        let rightPressed = false;

        let x = 500;
        let y = 250;
        let rotation = 0;

        let drift = 0.0;

        pop.play();
        player.style.display = "block";
        
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
                x += speed * Math.sin(rotation * Math.PI / 180);
                y -= speed * Math.cos(rotation * Math.PI / 180);
            } else if (downPressed) {
                x -= speed * Math.sin(rotation * Math.PI / 180);
                y += speed * Math.cos(rotation * Math.PI / 180);
            }

            if (leftPressed) {
                rotation -= speed;
            } else if (rightPressed) {
                rotation += speed;
            }

            player.style.left = `${x}px`;
            player.style.top = `${y}px`;

            player.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`;
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