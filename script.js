const restaurantData = {
    restaurant1: {
        name: "The Clove Club",
        corkageFee: "£50",
        address: "380 Old St",
        postcode: "EC1V 9LT",
        contact: "020 7729 6496",
        style: "Fine Dining",
        website: "https://thecloveclub.com"
    },
    restaurant2: {
        name: "Portland",
        corkageFee: "£35",
        address: "113 Great Portland St",
        postcode: "W1W 6QQ",
        contact: "020 7436 3261",
        style: "Modern European",
        website: "https://portlandrestaurant.co.uk"
    }
    // Add more restaurants as needed
};

function showDetails(restaurantId) {
    const restaurant = restaurantData[restaurantId];
    const modal = document.getElementById('restaurantDetails');
    const content = document.getElementById('modalContent');
    
    content.innerHTML = `
        <h2>${restaurant.name}</h2>
        <div class="restaurant-details">
            <span class="detail-label">Corkage Fee:</span>
            <span>${restaurant.corkageFee}</span>
            
            <span class="detail-label">Address:</span>
            <span>${restaurant.address}</span>
            
            <span class="detail-label">Postcode:</span>
            <span>${restaurant.postcode}</span>
            
            <span class="detail-label">Contact:</span>
            <span>${restaurant.contact}</span>
            
            <span class="detail-label">Style:</span>
            <span>${restaurant.style}</span>
            
            <span class="detail-label">Website:</span>
            <span><a href="${restaurant.website}" class="website-link" target="_blank">${restaurant.website}</a></span>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeDetails() {
    document.getElementById('restaurantDetails').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('restaurantDetails');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
} 