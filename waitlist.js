document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('waitlistModal');
    const waitlistBtns = document.querySelectorAll('.waitlist-btn, .header-waitlist-btn');
    const span = modal.querySelector('.close');
    const form = document.getElementById('waitlistForm');

    // Open modal for all waitlist buttons
    waitlistBtns.forEach(btn => {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    });

    // Close modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close when clicking outside
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Close on ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    form.onsubmit = function(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('entry.2001853875', document.getElementById('name').value);
        formData.append('entry.225096343', document.getElementById('email').value);

        fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLScwfTCX9x7BFOxoQiwXxrrMNqTpDuUcYrFIb93hOtGn78XOYw/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
        .then(() => {
            // Clear form
            form.reset();
            // Close modal
            modal.style.display = "none";
            
            // Show notification
            const notification = document.getElementById('notification');
            notification.style.display = 'block';
        })
        .catch(error => {
            console.error('Error submitting form:', error);
        });
    }
}); 