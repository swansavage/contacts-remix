const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const path = event.queryStringParameters.path || "index.html"; // Default to 'index.html' if no path is specified
  const url = `https://elaborate-cactus-791d91.netlify.app/`;

  try {
    const response = await fetch(url);
    const body = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": response.headers.get("Content-Type"), // Mimic the content type of the fetched resource
        "Access-Control-Allow-Origin":
          "https://papaya-bellflower-58z8.squarespace.com/", // Allow requests from any origin
        // Add other CORS headers if needed
      },
      body: body,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
