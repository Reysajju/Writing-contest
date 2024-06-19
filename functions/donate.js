let heartsDonated = 0;

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    heartsDonated++;
    return {
        statusCode: 200,
        body: JSON.stringify({ heartsDonated }),
    };
};
