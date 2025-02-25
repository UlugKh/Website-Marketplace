document.addEventListener("mousemove", (e) => {
    const image = document.querySelector(".image-container img");
    const content = document.querySelector(".content-container");

    const moveX = (e.clientX / window.innerWidth) * 30 - 15;
    const moveY = (e.clientY / window.innerHeight) * 30 - 15;

    image.style.transform = `scale(1.2) translate(${moveX / 2}px, ${moveY / 2}px)`;
    content.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
