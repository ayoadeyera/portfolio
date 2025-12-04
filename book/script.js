document.addEventListener('DOMContentLoaded', () => {
    // Get the button and the body element
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for a saved theme preference (optional, but good practice)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Add event listener to the button
    themeToggle.addEventListener('click', () => {
        // Toggle the 'dark-mode' class on the body
        body.classList.toggle('dark-mode');

        // Save the current theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});