// Copy code to clipboard functionality
function copyCode(elementId) {
    const codeElement = document.getElementById(elementId);
    
    // Get the code content from the code tag
    const codeTag = codeElement.querySelector('code');
    const codeContent = codeTag ? (codeTag.innerText || codeTag.textContent) : (codeElement.innerText || codeElement.textContent);
    
    navigator.clipboard.writeText(codeContent.trim()).then(function() {
        // Show success message
        const button = event.target.closest('button');
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.style.backgroundColor = '#34c759';
        
        setTimeout(function() {
            button.innerHTML = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
        alert('Failed to copy code. Please try selecting and copying manually.');
    });
}

// Download code as .py file
function downloadCode(elementId, filename) {
    const codeElement = document.getElementById(elementId);
    
    // Get the code content from the code tag
    const codeTag = codeElement.querySelector('code');
    const codeContent = codeTag ? (codeTag.innerText || codeTag.textContent) : (codeElement.innerText || codeElement.textContent);
    
    // Create a blob with the code content
    const blob = new Blob([codeContent.trim()], { type: 'text/x-python' });
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = filename || 'code.py';
    document.body.appendChild(a);
    a.click();
    
    // Cleanup
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
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
