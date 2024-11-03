document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('waitlistModal');
    const btn = document.querySelector('.waitlist-btn');
    const span = modal.querySelector('.close');
    const form = document.getElementById('waitlistForm');

    // Open modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

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
            // Show success message (you might want to add this to your HTML)
            alert('Thank you for joining the waitlist!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
        });
    }
}); 