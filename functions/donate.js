// Example implementation - Modify as per your actual data storage mechanism

let heartsDonated = 0; // Initialize with a default value

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        // Increment the hearts donated count
        heartsDonated++;

        // Log the donation for verification or storage (optional)
        console.log('A heart has been donated! Total hearts donated:', heartsDonated);

        // Return the updated count as JSON response
        return {
            statusCode: 200,
            body: JSON.stringify({ heartsDonated }),
        };
    } catch (error) {
        console.error('Error donating heart:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to donate heart' }),
        };
    }
};
