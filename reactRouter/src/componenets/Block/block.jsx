import React from "react";
import { Link } from "react-router-dom";
import paper from "../../source/paper.jpeg";
import sih from "../../source/sih.jpeg";
import intern from "../../source/intern.jpeg";
import paper1 from "../../source/fin_irjmets1683168276.pdf";
import intern1 from "../../source/intern.pdf";
import sih1 from "../../source/TK1052.pdf";
import demoVideo from "../../source/sih23.mp4"; // 👈 your video file

const projectsData = [
  {
    name: "Published the Research Paper on Fingerprint Authentication System",
    detail:
      "A fingerprint authentication system identifies users whose fingerprints may be altered or damaged due to injuries or aging — ensuring secure, consistent verification with high accuracy.",
    href: paper,
    wd: paper1,
  },
  {
    name: "Smart India Hackathon 2022",
    detail:
      "Built a Hospital Bed Management System to optimize bed allocation using real-time updates and smart data tracking, improving healthcare efficiency during peak demand.",
    href: sih,
    wd: sih1,
  },
  {
    name: "Smart India Hackathon 2023 (Video Demo)",
    detail:
      "Developed a full-stack mental wellness app with mood tracking, guided therapies, and real-time chat. Watch the demo below.",
    video: demoVideo, // 👈 video replaces image
    wd: intern1,
  },
];

export default function Block() {
  return (
    <section className="py-8 " id="blogs">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14">
          Blogs & Achievements
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500 overflow-hidden border border-gray-100"
            >
              {/* Media (Image or Video) */}
              <div className="h-52 overflow-hidden">
                {item.video ? (
                  <video
                    src={item.video}
                    controls
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover rounded-t-2xl"
                  />
                ) : (
                  <img
                    src={item.href}
                    alt={item.name}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700 rounded-t-2xl"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-[280px]">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-orange-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">
                    {item.detail}
                  </p>
                </div>

                {/* Read More Button */}
                <div className="mt-4">
                  <Link
                    to="/"
                    onClick={() => window.open(item.wd)}
                    className="inline-flex items-center text-sm font-medium text-white bg-orange-700 hover:bg-orange-800 rounded-lg px-4 py-2 transition-all duration-300"
                  >
                    Read More
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
