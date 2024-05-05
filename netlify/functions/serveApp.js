exports.handler = async function (event, context) {
  const headers = {
    "Access-Control-Allow-Origin":
      "https://papaya-bellflower-58z8.squarespace.com",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  // Handle OPTIONS request for CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers,
      body: "",
    };
  }

  const path = event.queryStringParameters.path || "index.html";
  const url = `https://elaborate-cactus-791d91.netlify.app/`;

  try {
    const response = await fetch(url);
    const body = await response.text();

    return {
      statusCode: 200,
      headers: {
        ...headers,
        "Content-Type": response.headers.get("Content-Type") || "text/html", // Ensuring a default
      },
      body: body,
    };
  } catch (error) {
    return { statusCode: 500, headers, body: error.toString() };
  }
};
