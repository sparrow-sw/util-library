const error = (statusCode) => (code, message, details = []) => Object.assign(new Error(message), {
    statusCode,
    message,
    code,
    details,
});

export default {
    badRequest: error(400),
    unauthorized: error(401),
    paymentRequired: error(402),
    forbidden: error(403),
    notFound: error(404),
    conflict: error(409),
    badData: error(422),
    illegal: error(451),
    internal: error(500),
};