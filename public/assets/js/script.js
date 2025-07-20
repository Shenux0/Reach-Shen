// Minimal script for contact page
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced email functionality with fallback
    const emailLink = document.querySelector('a[href^="mailto:"]');
    const phoneLink = document.querySelector('a[href^="tel:"]');
    
    // Email link with fallback
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            // Try mailto first
            setTimeout(() => {
                // If user is still on the page after 1 second, mailto probably failed
                if (document.hasFocus()) {
                    // Fallback: copy email to clipboard
                    navigator.clipboard.writeText('rashenkodagoda@gmail.com').then(function() {
                        showCustomToast('Email copied to clipboard!');
                    }).catch(function() {
                        // If clipboard doesn't work, show the email
                        showCustomToast('Email: rashenkodagoda@gmail.com');
                    });
                }
            }, 1000);
        });
    }
    
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
    
    if (phoneLink) {
        addCopyFunctionality(phoneLink, '+94772003542');
    }
});

// Custom toast notification function
function showCustomToast(message) {
    // Remove any existing toast
    const existingToast = document.querySelector('.custom-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.textContent = message;
    
    // Add styles
    toast.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: rgba(0, 0, 0, 0.9);
        color: #fff;
        padding: 15px 25px;
        border-radius: 8px;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 400;
        z-index: 10000;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.1);
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 2500);
}

// Global function for email fallback
function openEmailFallback(event) {
    // Let the mailto try first, then fallback if needed
    setTimeout(() => {
        if (document.hasFocus()) {
            // Mailto failed, try Gmail web interface
            const subject = encodeURIComponent('Hello Shen!');
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rashenkodagoda@gmail.com&su=${subject}`;
            window.open(gmailUrl, '_blank');
        }
    }, 500);
}
