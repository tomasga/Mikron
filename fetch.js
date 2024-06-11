// Specify the API endpoint for user data
const apiUrl = 'https://webemea.nexteer.com:4643/mikron-api/api/Form/loadallplantheaderstolist?plant=577';

// Make a GET request using the Fetch API
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Convert response to JSON
    })
    .then(orders => {
        // Process the retrieved user data
        console.log('User Data:', orders);
    })
    .catch(error => {
        console.error('Error:', error);
    });