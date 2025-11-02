export async function handler(event, context) {
  try {
    const GITHUB_TOKEN = process.env.VITE_GITHUB_TOKEN; // stored in Netlify environment
    const GITHUB_USERNAME = "UjvalBorole";

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
          {
            user(login: "${GITHUB_USERNAME}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                    description
                    url
                    languages(first: 3) {
                      nodes { name }
                    }
                  }
                }
              }
            }
          }
        `,
      }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
