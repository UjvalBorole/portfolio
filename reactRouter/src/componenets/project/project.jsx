import React, { useEffect, useState } from "react";
import Showcase from "./Showcase";

// your GitHub info
const GITHUB_USERNAME = "UjvalBorole";
const YOUR_GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // stored securely in .env

export default function Project({ showAll = false }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let response;

        if (showAll) {
          // all repos
          response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`
          );
          const data = await response.json();
          setRepos(
            data.map((repo) => ({
              name: repo.name,
              desc: repo.description,
              link: repo.html_url,
              skills: repo.language || "N/A",
            }))
          );
        } else {
          // pinned repos via GraphQL
          response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${YOUR_GITHUB_TOKEN}`,
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

          const result = await response.json();
          const pinned = result?.data?.user?.pinnedItems?.nodes || [];
          setRepos(
            pinned.map((repo) => ({
              name: repo.name,
              desc: repo.description,
              link: repo.url,
              skills: repo.languages.nodes.map((l) => l.name).join(", "),
            }))
          );
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load repositories.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [showAll]);

  return (
    <div className="container-xl md:mx-auto mb-10">
      <h2
        className="text-3xl text-gray-900 font-bold md:text-4xl flex justify-center items-center my-8 cursor-pointer hover:text-orange-700 transition"
        onClick={() => (window.location.href = "/project")}
      >
        Projects
      </h2>

      {loading ? (
        <p className="text-center text-gray-600 mt-6">Loading projects...</p>
      ) : error ? (
        <p className="text-center text-red-600 mt-6">{error}</p>
      ) : (
        <Showcase data={repos} />
      )}
    </div>
  );
}
