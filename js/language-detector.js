// Language detection script
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the homepage (not already in a language subfolder)
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html' || path.endsWith('/index.html')) {
        // Get browser language
        const userLang = navigator.language || navigator.userLanguage;
        
        // If the language starts with 'vi', redirect to Vietnamese version
        if (userLang.startsWith('vi') && !path.includes('/vi/')) {
            // Get base URL
            const baseUrl = window.location.origin;
            window.location.href = baseUrl + '/vi/';
        }
    }
});
