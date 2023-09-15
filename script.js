const line = document.getElementById('line');
let rotationAngle = 0;

function rotateLine() {
    // Increment the rotation angle by 2 degrees
    rotationAngle += 2;

    // Apply the rotation to the line using CSS transform property
    line.style.transform = `rotate(${rotationAngle}deg)`;

    // Request the next animation frame to create a smooth animation loop
    requestAnimationFrame(rotateLine);
}

// Start the animation loop
rotateLine();
