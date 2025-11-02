import React, { useEffect, useState } from "react";
import { defaultImages } from "./sampleImages";

const Showcase = ({ data }) => {
  const [current, setCurrent] = useState(0);

  // Rotate images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % defaultImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {data.map((project, index) => (
        <div
          key={index}
          className="w-64 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-500"
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img
              src={defaultImages[(index + current) % defaultImages.length]}
              alt={project.name}
              className="h-40 w-full object-cover rounded-t-xl transition-all duration-700"
            />
          </a>

          <div className="p-4 bg-white rounded-b-xl">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2 text-base font-semibold text-gray-900 hover:text-orange-600"
            >
              {project.name}
            </a>
            <p className="text-xs text-gray-700 line-clamp-2">
              {project.desc || "No description available."}
            </p>

            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-gray-600">{project.skills}</span>
              <a
                href={project.link}
                className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-xs px-3 py-1.5 whitespace-nowrap"
              >
                View →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
