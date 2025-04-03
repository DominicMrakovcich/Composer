// sparkle.js
document.addEventListener('DOMContentLoaded', function() {
    let sparkleContainer = document.querySelector('.sparkles');
    let sparkleCount = 30; // You can adjust the number of sparkles

    for (let i = 0; i < sparkleCount; i++) {
        let sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkleContainer.appendChild(sparkle);
    }
});
