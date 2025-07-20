// Minimal script for contact page
document.addEventListener('DOMContentLoaded', function() {
    // Copy to clipboard functionality for email and phone
    const emailLink = document.querySelector('a[href^="mailto:"]');
    const phoneLink = document.querySelector('a[href^="tel:"]');
    
    function addCopyFunctionality(element, text) {
        if (element) {
            element.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                navigator.clipboard.writeText(text).then(function() {
                    console.log('Copied to clipboard: ' + text);
                });
            });
        }
    }
    
    if (emailLink) {
        addCopyFunctionality(emailLink, 'rashenkodagoda@gmail.com');
    }
    
    if (phoneLink) {
        addCopyFunctionality(phoneLink, '+94772003542');
    }
});
