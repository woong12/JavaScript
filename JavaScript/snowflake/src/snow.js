import "./styles.css";

const MIN_DURATION = 10;

const body = document.querySelector("body");

function makeSnowflake() {
    const snowflake = document.createElement("div");
    const delay = Math.random() * 10;
    const duration = Math.random() * 20 + MIN_DURATION;
    const initialOpacity = Math.random();

    snowflake.classList.add("snowflake");
    snowflake.style.animation = `fall ${duration}s linear`;
    snowflake.style.animationDelay = delay;
    snowflake.style.left = `${Math.random() * window.screen.width}px`;
    snowflake.style.opacity = initialOpacity;

    body.appendChild(snowflake);

    setTimeout(() => {
        body.removeChild(snowflake);
        makeSnowflake();
    }, delay + duration * 1000);
}

for (let index = 0; index < 50; index++) {
    setTimeout(makeSnowflake, 200 * index);
}
