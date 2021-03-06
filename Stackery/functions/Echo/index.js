module.exports = function handler(request, context, callback) {
  // Log the request to the console.
  console.dir(request);

  // Get the message sent in the endpoint path parameter
  let message = request.pathParameters.message;

  // Build a response.
  let responseBody = `
    <h4>You sent the following message:</h4>
    <p>${message}</p>
  `;

  let response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: responseBody
  };

  callback(null, response);
};