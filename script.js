// Fetch restaurant data
let restaurantData = {};

async function fetchData() {
    try {
        const response = await fetch('data.json');
        restaurantData = await response.json();
        renderRestaurantCards();
        setupFilters();
    } catch (error) {
        console.error('Error loading restaurant data:', error);
    }
}

// Function to render restaurant cards - showing only summary
function renderRestaurantCards() {
    const grid = document.querySelector('.restaurant-grid');
    grid.innerHTML = '';
    
    Object.entries(restaurantData).forEach(([id, restaurant]) => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        card.dataset.restaurantId = id;
        card.onclick = () => showDetails(id);
        
        card.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p class="style">${restaurant.style}</p>
            <p class="corkage">${restaurant.corkageFeeSummary}</p>
        `;
        
        grid.appendChild(card);
    });
}

// Setup filter buttons
function setupFilters() {
    // Setup button filters
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            filterRestaurants(e.target.dataset.area);
        });
    });

    // Setup dropdown filter
    const dropdown = document.querySelector('.filter-dropdown');
    dropdown.addEventListener('change', (e) => {
        filterRestaurants(e.target.value);
    });
}

// Filter restaurants based on selected area
function filterRestaurants(selectedArea) {
    const cards = document.querySelectorAll('.restaurant-card');
    
    cards.forEach(card => {
        const restaurantId = card.dataset.restaurantId;
        const restaurant = restaurantData[restaurantId];
        
        if (selectedArea === 'all' || restaurant.area === selectedArea) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', fetchData);

// Show details modal - showing only detail
function showDetails(restaurantId) {
    const restaurant = restaurantData[restaurantId];
    const modal = document.getElementById('restaurantDetails');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <h2>${restaurant.name}</h2>
        <div class="restaurant-details">
            <span class="detail-label">Area:</span>
            <span>${restaurant.area}</span>
            
            <span class="detail-label">Corkage:</span>
            <span>${restaurant.corkageFeeDetail}</span>
            
            <span class="detail-label">Address:</span>
            <span>${restaurant.address}</span>
            
            <span class="detail-label">Postcode:</span>
            <span>${restaurant.postcode}</span>
            
            <span class="detail-label">Contact:</span>
            <span>${restaurant.contact}</span>
            
            <span class="detail-label">Style:</span>
            <span>${restaurant.style}</span>
            
            <span class="detail-label">Website:</span>
            <span><a href="https://${restaurant.website}" target="_blank">${restaurant.website}</a></span>
        </div>
    `;
    
    modal.style.display = 'block';
}

// Modal functions
function closeDetails() {
    document.getElementById('restaurantDetails').style.display = 'none';
}

function openSuggestionModal() {
    document.getElementById('suggestionModal').style.display = 'block';
}

function closeSuggestionModal() {
    document.getElementById('suggestionModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const detailsModal = document.getElementById('restaurantDetails');
    const suggestionModal = document.getElementById('suggestionModal');
    if (event.target === detailsModal || event.target === suggestionModal) {
        detailsModal.style.display = 'none';
        suggestionModal.style.display = 'none';
    }
}

// Expose functions to window object for HTML onclick attributes
window.showDetails = showDetails;
window.closeDetails = closeDetails;
window.openSuggestionModal = openSuggestionModal;
window.closeSuggestionModal = closeSuggestionModal;

// Form submission handler
document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    
    // Add form submission handler
    document.getElementById('suggestionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const restaurantName = document.getElementById('restaurantName').value;
        let website = document.getElementById('website').value;
        const corkage = document.getElementById('corkage').value;
        
        // Add https:// if no protocol is specified
        if (website && !website.startsWith('http://') && !website.startsWith('https://')) {
            website = 'https://' + website;
        }
        
        // Create form data
        const formData = new FormData();
        formData.append('entry.648641937', restaurantName);
        formData.append('entry.1146551704', website);
        formData.append('entry.401103829', corkage);
        
        // Submit to Google Form
        fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSdCTlbrDc3I1dgKsh0318ZYgo0CrjSVevpBZJhyBJZzJYbpGw/formResponse', {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        })
        .then(response => {
            // Clear form
            document.getElementById('suggestionForm').reset();
            
            // Close modal
            closeSuggestionModal();
            
            // Show success message
            alert('Thank you for your suggestion!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your suggestion. Please try again.');
        });
    });
});

// Add event listener for ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const detailsModal = document.getElementById('restaurantDetails');
        const suggestionModal = document.getElementById('suggestionModal');
        
        // Close any open modal
        if (detailsModal) detailsModal.style.display = 'none';
        if (suggestionModal) suggestionModal.style.display = 'none';
    }
});