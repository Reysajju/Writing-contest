// Example implementation - Modify as per your actual data storage mechanism

let heartsDonated = 0; // Initialize with a default value

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        // Simulate fetching from a database or persistent storage
        // Replace this with actual logic to fetch the stored count
        // Example: heartsDonated = await fetchHeartsCountFromDatabase();

        // Return the current count as JSON response
        return {
            statusCode: 200,
            body: JSON.stringify({ heartsDonated }),
        };
    } catch (error) {
        console.error('Error fetching hearts count:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch hearts count' }),
        };
    }
};
