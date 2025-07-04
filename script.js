
document.addEventListener("DOMContentLoaded", function() {
    // Wait for 5 seconds before hiding the splash screen
    setTimeout(hideSplashScreen, 5000);
});

function hideSplashScreen() {
    let splash = document.getElementById("splash");
    let mainContent = document.getElementById("mainContent");
    
    // Fade out the splash screen
    splash.style.opacity = "0";
    
    // After fade-out animation completes, hide splash screen and show main content
    setTimeout(function() {
        splash.style.display = "none";
        mainContent.style.display = "block";
        
        // Fade in the main content
        setTimeout(() => mainContent.style.opacity = "1", 100);
    }, 1000);
}

            