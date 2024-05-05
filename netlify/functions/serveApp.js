import fetch from "node-fetch";

async function handler(event, context) {
  const path = event.queryStringParameters.path || "index.html"; // Default to 'index.html' if no path is specified
  const url = `https://dazzling-mermaid-91b987.netlify.app/`;

  try {
    const response = await fetch(url);
    const body = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": response.headers.get("Content-Type"), // Mimic the content type of the fetched resource
      },
      body: body,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
}

export { handler };
