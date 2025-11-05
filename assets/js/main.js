// Copy code to clipboard functionality
function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    const codeText = codeElement.innerText || codeElement.textContent;
    
    navigator.clipboard.writeText(codeText).then(function() {
        // Show success message
        const button = event.target.closest('button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.backgroundColor = '#27ae60';
        
        setTimeout(function() {
            button.innerHTML = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
        alert('Failed to copy code. Please try selecting and copying manually.');
    });
}

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    // Add any additional initialization here
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
