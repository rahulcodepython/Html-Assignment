function rotateBox() {
    const box = document.getElementById('box');
    box.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        box.style.transform = 'rotate(0deg)'; // Reset after rotation
    }, 500);
}
function changeColorOnHover() {
    const hoverBox = document.getElementById('hoverBox');
    hoverBox.style.backgroundColor = 'lightgreen';
}
function resetColorOnOut() {
    const hoverBox = document.getElementById('hoverBox');
    hoverBox.style.backgroundColor = 'lightblue';
}
function moveBox(event) {
    const box = document.getElementById('box');
    if (event.key === 'ArrowRight') {
        box.style.transform = 'translateX(100px)';
    } else if (event.key === 'ArrowLeft') {
        box.style.transform = 'translateX(-100px)';
    }
}
function showSuccessMessage(event) {
    event.preventDefault(); // Prevent the form from submitting
    const message = document.getElementById('message');
    message.style.display = 'block';
    setTimeout(() => {
        message.style.opacity = 1; // Fade in
    }, 0);
}
document.getElementById('box').addEventListener('click', rotateBox);
document.getElementById('hoverBox').addEventListener('mouseover', changeColorOnHover);
document.getElementById('hoverBox').addEventListener('mouseout', resetColorOnOut);
document.getElementById('textInput').addEventListener('keydown', moveBox);
document.getElementById('myForm').addEventListener('submit', showSuccessMessage);