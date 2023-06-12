// Get a reference to the root HTML element
const htmlBlock = document.documentElement;

// Retrieve the user's saved theme from local storage
const saveUserTheme = localStorage.getItem('user-theme');

let resetButton; // Variable to store reset button(s)

let userTheme; // Variable to store the user's preferred theme based on their system preferences
if (window.matchMedia) {
    // Check if the browser supports the matchMedia API
    // Set userTheme to 'dark-theme' if the system prefers dark color scheme, otherwise set it to 'light-theme'
    userTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
}
// Listen for changes in the system's preferred color scheme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    // If no user theme is saved, change the theme
    !saveUserTheme ? changeTheme() : null;
});

// Function to set the theme class on the root HTML element
function setThemeClass() {
    if (saveUserTheme) {
        // If a user theme is saved, add it as a class to the root HTML element
        htmlBlock.classList.add(saveUserTheme);
        if (resetButton != null) {
            // If resetButton is defined, add the 'active' class to all reset buttons
            resetButton.forEach(button => {
                button.classList.add('active');
            });
        }
    } else {
        // If no user theme is saved, add the user's preferred theme as a class to the root HTML element
        htmlBlock.classList.add(userTheme);
    }
}

setThemeClass(); // Call the setThemeClass function to set the initial theme

// Function to change the theme
function changeTheme(saveTheme = false) {
    let currentTheme = htmlBlock.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    let newTheme;

    if (currentTheme === 'light-theme') {
        newTheme = 'dark-theme';
    } else if (currentTheme === 'dark-theme') {
        newTheme = 'light-theme';
    }
    // Remove the current theme class and add the new theme class to the root HTML element
    htmlBlock.classList.remove(currentTheme);
    htmlBlock.classList.add(newTheme);
    // If saveTheme is true, save the new theme in local storage
    saveTheme ? localStorage.setItem('user-theme', newTheme) : null;
}

// Event listener that executes when the window finishes loading
window.addEventListener('load', () => {
    // Get references to theme buttons and reset buttons
    const themeButton = document.querySelectorAll('.switch-theme__button');
    resetButton = document.querySelectorAll('.switch-theme__reset');
    if (themeButton) {
        // If theme buttons exist, add event listeners to each button
        themeButton.forEach(button => {
            button.addEventListener('click', function(event) {
                if (resetButton) {
                    // If reset buttons exist, add the 'active' class to all reset buttons
                    resetButton.forEach(button => {
                        button.classList.add('active');
                    });
                }
                changeTheme(true); // Call the changeTheme function and save the theme
            });
        });
    }
    if (resetButton) {
        // If reset buttons exist, add event listeners to each button
        resetButton.forEach(button => {
            button.addEventListener('click', function(event) {
                resetButton.classList.remove('active');
                // Remove the user theme from local storage
                localStorage.setItem('user-theme', '');
            });
        });
    }
})