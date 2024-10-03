function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "flex"; // Show the element
    } else {
        element.style.display = "none"; // Hide the element
    }
}
function slideInOut(id) {
    const element = document.getElementById(id);
    if (element.style.transform === "translateX(100%)") {
        element.style.transform = "translateX(0)"; // Slide in
    } else {
        element.style.transform = "translateX(100%)"; // Slide out
    }
}
function fadeEffect(id) {
    const element = document.getElementById(id);
    let opacity = 1;
    if (element.style.opacity === "0") {
        opacity = 1; // Reset opacity to 1
    } else {
        opacity = 0; // Start fading out
    }
    const fade = setInterval(() => {
        if (opacity <= 0) {
            clearInterval(fade);
            element.style.display = "none"; // Hide the element after fading
        } else {
            element.style.opacity = opacity;
            opacity -= 0.05; // Decrease opacity
        }
    }, 50);
}