// Display an alert when the button is clicked
function showMessage() {
    alert('Button clicked!');
}

// Change the content of an element
function changeContent() {
    const mainContent = document.querySelector('main p');
    mainContent.textContent = 'The content has been changed!';
}

// Toggle a CSS class on an element
function toggleHighlight() {
    const header = document.querySelector('header');
    header.classList.toggle('highlight');
}

// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is running and DOM is fully loaded.');
    
    // Adding event listeners for other testing purposes
    const button = document.querySelector('.btn');
    button.addEventListener('click', () => {
        changeContent();
        toggleHighlight();
    });
});
