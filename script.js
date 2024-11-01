const restaurantData = {
    hawksmoor: {
        name: "Hawksmoor",
        area: "Multiple Locations",
        corkageFee: "£5 corkage on Mondays",
        address: "Several locations in London: Piccadilly Circus, London Bridge, Bank, Shoredich, South Kensington, Covent Garden, Canary Wharf",
        postcode: "-",
        contact: "-",
        style: "Steak",
        website: "thehawksmoor.com"
    },
    tayyabs: {
        name: "Tayyabs",
        area: "East London",
        corkageFee: "Free every day",
        address: "83-89 Fieldgate Street",
        postcode: "E1 1JU",
        contact: "020 7247 9543",
        style: "Indian",
        website: "tayyabs.co.uk"
    },
    kitchenw8: {
        name: "Kitchen W8",
        area: "West London",
        corkageFee: "Free on Sundays evenings",
        address: "11-13 Abingdon Road",
        postcode: "W8 6AH",
        contact: "020 7937 0120",
        style: "Modern European",
        website: "kitchenw8.com"
    },
    cabotte: {
        name: "Cabotte",
        area: "City",
        corkageFee: "Free on Mondays. £25 per bottle, £50 per Magnum and £75 for a Jeroboam",
        address: "48 Gresham Street",
        postcode: "EC2V 7AY",
        contact: "020 7600 1616",
        style: "Modern French",
        website: "cabotte.co.uk"
    },
    parsons: {
        name: "Parsons",
        area: "Central London",
        corkageFee: "£25 per bottle",
        address: "39 Endell Street",
        postcode: "WC2H 9BA",
        contact: "020 3422 0221",
        style: "Seafood",
        website: "thebirdinhandlondon.com"
    },
    ledbury: {
        name: "Ledbury",
        area: "West London",
        corkageFee: "£75 per bottle",
        address: "127 Ledbury Road",
        postcode: "W11 2AQ",
        contact: "020 7792 9090",
        style: "3 Michelin stars restaurant. Modern cuisine",
        website: "theledbury.com"
    },
    medlar: {
        name: "Medlar",
        area: "West London",
        corkageFee: "£15 at Lunch, £30 at Dinner",
        address: "438 King's Rd, Chelsea",
        postcode: "SW10 0LJ",
        contact: "020 7349 1900",
        style: "High-end, Modern French food with global influences",
        website: "medlarrestaurant.co.uk"
    },
    cloveclub: {
        name: "The Clove Club",
        area: "East London",
        corkageFee: "£75 per bottle - one per two guests permitted",
        address: "Shoreditch Town Hall, 380 Old St",
        postcode: "EC1V 9LT",
        contact: "020 7729 6496",
        style: "Cutting-edge restaurant and bar for innovative British menu",
        website: "thecloveclub.com"
    },
    luca: {
        name: "Luca",
        area: "East London",
        corkageFee: "£50 per bottle, for a maximum of two bottles",
        address: "88 St John St, Clerkenwell",
        postcode: "EC1M 4EH",
        contact: "020 3859 3000",
        style: "British seasonal ingredients through an italian lens",
        website: "luca.restaurant"
    },
    noblerotsoho: {
        name: "Noble Rot Soho",
        area: "Central London",
        corkageFee: "£25 per bottle & £50 per Magnum",
        address: "2 Greek Street",
        postcode: "W1D 4NB",
        contact: "020 7183 8190",
        style: "Modern European",
        website: "noblerot.co.uk"
    },
    noblerotmayfair: {
        name: "Noble Rot Mayfair",
        area: "Central London",
        corkageFee: "£25 per bottle & £50 per Magnum",
        address: "5 Trebeck St, Shepherd Market",
        postcode: "W1J 7LT",
        contact: "020 7101 6770",
        style: "Modern European",
        website: "noblerot.co.uk"
    },
    trinity: {
        name: "Trinity",
        area: "South London",
        corkageFee: "£35 for wine and £40 for sparkling",
        address: "4 The Polygon",
        postcode: "SW4 0JG",
        contact: "020 7622 1199",
        style: "Modern Cuisine",
        website: "trinityrestaurant.co.uk"
    },
    bandol: {
        name: "Bandol",
        area: "West London",
        corkageFee: "£25 per bottle",
        address: "6 Hollywood Rd, Kensington",
        postcode: "SW10 9HU",
        contact: "0207 351 1322",
        style: "Elegant restaurant showcasing the flavours & style of the South of France",
        website: "barbandol.co.uk"
    },
    quovadis: {
        name: "Quo Vadis",
        area: "Central London",
        corkageFee: "£30 per bottle, £50 per bottle of Champagne",
        address: "28-29 Dean St, Soho",
        postcode: "W1D 3LL",
        contact: "0207 440 1450",
        style: "Modern British cuisine",
        website: "quovadissoho.co.uk"
    },
    lorne: {
        name: "Lorne",
        area: "Central London",
        corkageFee: "£40 per bottle",
        address: "76 Wilton Road",
        postcode: "SW1V 1DE",
        contact: "020 3327 0210",
        style: "Modern British",
        website: "lornerestaurant.co.uk"
    },
    taillevent: {
        name: "110 de Taillevent",
        area: "Central London",
        corkageFee: "£50 per bottle & per table",
        address: "16 Cavendish Square, Marylebone",
        postcode: "W1G 9DD",
        contact: "020 314 16016",
        style: "Classic bistro offering an ample wine list and upmarket French menus",
        website: "les-110-taillevent-london.com"
    },
    latrompette: {
        name: "La Trompette",
        area: "West London",
        corkageFee: "£40 per bottle - maximum of four 75cl bottles or two magnums per table",
        address: "3-7 Devonshire Road",
        postcode: "W4 2EU",
        contact: "020 8747 1836",
        style: "High-end french cuisine",
        website: "latrompette.co.uk"
    },
    chezbruce: {
        name: "Chez Bruce",
        area: "South London",
        corkageFee: "£40 per bottle - maximum of four 75cl bottles or two magnums per table",
        address: "2 Bellevue Road, Wandsworth Common",
        postcode: "SW17 7EG",
        contact: "020 8672 0114",
        style: "High-end french cuisine",
        website: "chezbruce.co.uk"
    }
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

function openSuggestionModal() {
    document.getElementById('suggestionModal').style.display = 'block';
}

function closeSuggestionModal() {
    document.getElementById('suggestionModal').style.display = 'none';
}

// Close modal if clicking outside of it
window.onclick = function(event) {
    const suggestionModal = document.getElementById('suggestionModal');
    if (event.target === suggestionModal) {
        suggestionModal.style.display = 'none';
    }
}

// Form submission handler
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

function filterRestaurants() {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            e.target.classList.add('active');
            
            const selectedArea = e.target.dataset.area;
            const cards = document.querySelectorAll('.restaurant-card');
            
            cards.forEach(card => {
                const restaurantId = card.getAttribute('onclick').match(/'(.*?)'/)[1];
                const restaurant = restaurantData[restaurantId];
                
                if (selectedArea === 'all' || restaurant.area === selectedArea) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', filterRestaurants);