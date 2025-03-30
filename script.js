// Get the cat element
const cat = document.getElementById('cat');

// Function to move the cat to a random position with a wiggle
function moveCat(event) {
  // Add the 'moving' class to start the wiggle effect
  cat.classList.add('moving');

  // Get the viewport dimensions
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate random positions within the viewport
  const randomX = Math.random() * (windowWidth - cat.offsetWidth); // Subtract cat's width to avoid overflowing
  const randomY = Math.random() * (windowHeight - cat.offsetHeight); // Subtract cat's height to avoid overflowing

  // Apply the random positions to the cat
  cat.style.left = `${randomX}px`;
  cat.style.top = `${randomY}px`;

  // Remove the 'moving' class after the wiggle animation is done (to stop it)
  setTimeout(() => {
    cat.classList.remove('moving');
  }, 600); // Time should match the wiggle animation duration
}

// Add event listener to the cat to move it when clicked
cat.addEventListener('click', moveCat);
