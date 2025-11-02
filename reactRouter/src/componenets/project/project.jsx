import React, { useEffect, useState } from "react";
import Showcase from "./showcase.jsx";
import { useNavigate } from "react-router-dom";

const GITHUB_USERNAME = "UjvalBorole";

export default function Project({ showAll = false }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        let response;

        if (showAll) {
          // ✅ Fetch all public repositories directly from GitHub
          response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`
          );
          const data = await response.json();

          if (Array.isArray(data)) {
            setRepos(
              data.map((repo) => ({
                name: repo.name,
                desc: repo.description,
                link: repo.html_url,
                skills: repo.language || "N/A",
              }))
            );
          } else {
            throw new Error("Unexpected data format from GitHub REST API");
          }
        } else {
          // ✅ Fetch pinned repos securely via Netlify Function
          response = await fetch("/.netlify/functions/github");
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
        console.error("Error fetching repositories:", err);
        setError("Failed to load repositories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [showAll]);

  return (
    <div className="container-xl md:mx-auto mb-10 px-4">
      <h2
        className="text-3xl text-gray-900 font-bold md:text-4xl flex justify-center items-center my-8 cursor-pointer hover:text-orange-700 transition"
        onClick={() => navigate("/project")}
      >
        Projects
      </h2>

      {loading ? (
        <p className="text-center text-gray-600 mt-6 animate-pulse">
          Loading projects...
        </p>
      ) : error ? (
        <p className="text-center text-red-600 mt-6">{error}</p>
      ) : (
        <Showcase data={repos} />
      )}
    </div>
  );
}
