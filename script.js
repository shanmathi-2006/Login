// public/js/main.js
console.log("Hello from main.js! This is client-side JavaScript.");

// Example of a simple client-side interaction (optional)
document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('h1');
    if (h1) {
        h1.addEventListener('click', () => {
            alert('You clicked the title!');
        });
    }
});