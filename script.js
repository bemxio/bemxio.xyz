const secret = document.getElementById("cube-activator");
const cube = document.getElementById("container-cube");
const face = document.getElementById("container-face");
const subtitle = document.getElementById("container-subtitle");

const pop = new Audio("/assets/pop.mp3");

function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

secret.addEventListener("click", () => {
    pop.play();

    secret.style.display = "none";
    cube.style.display = "block";
    face.style.display = "none";

    subtitle.textContent = "the bem cube";
});

secret.style.display = "block";

secret.style.top = randint(0, 100) + "%";
secret.style.left = randint(0, 100) + "%";