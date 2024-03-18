document.getElementById('add-home-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const formData = {
        address: document.getElementById('address').value,
        description: document.getElementById('description').value,
        price: parseInt(document.getElementById('price').value, 10),
        squareFootage: parseInt(document.getElementById('squareFootage').value, 10),
        numBedrooms: parseInt(document.getElementById('numBedrooms').value, 10),
        numBathrooms: parseInt(document.getElementById('numBathrooms').value, 10),
        yearBuilt: parseInt(document.getElementById('yearBuilt').value, 10),
        imageUrl: document.getElementById('imageUrl').value,
        availability: document.getElementById('availability').value,
        category: document.getElementById('category').value,
        pincode: document.getElementById('pincode').value,
    };

    fetch('http://localhost:5000/api/houses', { // Replace with your actual API endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Home added successfully');
        // Optionally, reset the form or redirect the user
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error adding home');
    });
});


document.getElementById('search-home-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const searchCriteria = {
        maxPrice: document.getElementById('maxPrice').value,
        squareFootage: document.getElementById('squareFootage').value,
        numBeds: document.getElementById('numBeds').value,
        numBaths: document.getElementById('numBaths').value,
    };

    fetch('http://localhost:5000/api/homes/search', { // Adjust API endpoint as necessary
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // Convert search criteria to query parameters
    })
    .then(response => response.json())
    .then(data => {
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = ''; // Clear previous results
        data.forEach(home => {
            // Append each result to the results container
            resultsContainer.innerHTML += `<div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${home.address}</h5>
                    <p class="card-text">${home.description}</p>
                    <p class="card-text">Price: $${home.price}</p>
                    <!-- Add other home details here -->
                </div>
            </div>`;
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});




function addHome() {
    const homeData = {
        // Gather data from form fields
    };
    
    fetch('http://yourapiaddress/api/homes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(homeData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Redirect or display success message
    })
    .catch((error) => {
        console.error('Error:', error);
        // Display error message
    });
}
