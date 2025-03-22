// Function to toggle the speech bubble visibility
function toggleSpeechBubble(event, message) {
    const speechBubble = event.target.nextElementSibling; // Find the speech bubble next to the clicked element
    if (!speechBubble) {
        // If no speech bubble exists, create one
        const newSpeechBubble = document.createElement('div');
        newSpeechBubble.classList.add('speech-bubble');
        newSpeechBubble.textContent = message;
        newSpeechBubble.style.display = 'block';  // Make it visible
        event.target.after(newSpeechBubble); // Insert it right after the clicked element
    } else {
        // If speech bubble exists, toggle it
        speechBubble.style.display = speechBubble.style.display === 'none' ? 'block' : 'none';
    }
}

// Event listener for the site title
document.querySelector('.site-title').addEventListener('click', function(event) {
    toggleSpeechBubble(event, "Dominic is a genius");
});
