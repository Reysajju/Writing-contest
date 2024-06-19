exports.handler = async (event, context) => {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    const heartsDonated = 0; // Implement logic to fetch stored count from database or file

    return {
        statusCode: 200,
        body: JSON.stringify({ heartsDonated }),
    };
};
