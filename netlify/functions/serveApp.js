// handler.js - An ES Module file
export async function handler(event, context) {
  // Dynamically import node-fetch as a CommonJS module
  const { default: fetch } = await import("node-fetch");

  // Default to 'index.html' if no path is specified
  const url = `https://elaborate-cactus-791d91.netlify.app/`;

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
