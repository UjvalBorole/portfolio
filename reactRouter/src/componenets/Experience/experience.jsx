import React from "react";
import { motion } from "framer-motion";

// 🧩 Import your local logos (place them in src/source/)
import tcsLogo from "../../source/tcs.png";
import aapliwebLogo from "../../source/aapliweb.webp";

const experiences = [
  {
    company: "Tata Consultancy Services (National Stock Exchange - Client)",
    location: "Mumbai, India",
    role: "Software Engineer",
    duration: "Jan 2025 – Present",
    logo: tcsLogo,
    skills: "Java, Spring Boot, Kafka, Apache Ignite, Jenkins, Kubernetes",
    points: [
      "Delivered sub-millisecond, 99.99% uptime market data broadcasting across all NSE segments.",
      "Built high-throughput trade processing pipelines using Apache Ignite and Kafka.",
      "Reduced latency by 40% using hybrid Chronicle + Kafka architecture.",
      "Accelerated releases by 25% via Jenkins CI/CD and Kubernetes deployments.",
    ],
  },
  {
    company: "Aapliweb",
    location: "Jalgaon, India",
    role: "Software Development Intern",
    skills: "Spring Boot, MySQL, Flutter",
    duration: "Sep 2022 – Dec 2022",
    logo: aapliwebLogo,
    points: [
      "Enhanced an eCommerce platform using Spring Boot and optimized MySQL schema for 30% faster queries.",
      "Developed a cross-platform Flutter app, reducing manual record-keeping by 40%.",
    ],
  },
];


export default function Experience() {
  return (
    <section className="py-8 bg-gray-50" id="experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
          Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-orange-500 ml-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              // ✨ Added left margin and tighter max width for balance
              className="relative bg-white ml-4 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[14px] top-8 w-4 h-4 bg-orange-600 rounded-full border-4 border-white shadow"></span>

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain border border-gray-200 rounded-md bg-white p-1.5 shadow-sm"
                  />
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-700 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-xs text-gray-500">{exp.location}</p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 mt-3 sm:mt-0 font-medium whitespace-nowrap">
                  {exp.duration}
                </p>
              </div>

              {/* Skills */}
              <p className="mt-3 text-xs text-gray-700">
                <strong>Skills:</strong> {exp.skills}
              </p>

              {/* Bullet Points */}
              <ul className="mt-3 list-disc list-inside text-gray-700 text-xs sm:text-sm space-y-1.5 leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import tcsLogo from "../../source/tcs.png";
// import aapliwebLogo from "../../source/aapliweb.webp";

// const experiences = [
//   {
//     company: "Tata Consultancy Services (National Stock Exchange - Client)",
//     location: "Mumbai, India",
//     role: "Software Engineer",
//     duration: "Jan 2025 – Present",
//     logo: tcsLogo,
//     points: [
//       "Delivered sub-millisecond, 99.99% uptime market data broadcasting across all NSE segments.",
//       "Built high-throughput trade processing pipelines using Apache Ignite and Kafka.",
//       "Reduced latency by 40% using hybrid Chronicle + Kafka architecture.",
//       "Accelerated releases by 25% via Jenkins CI/CD and Kubernetes deployments.",
//     ],
//   },
//   {
//     company: "Aapliweb",
//     location: "Jalgaon, India",
//     role: "Software Development Intern",
//     duration: "Sep 2022 – Dec 2022",
//     logo: aapliwebLogo,
//     points: [
//       "Enhanced an eCommerce platform using Spring Boot and optimized MySQL schema for 30% faster queries.",
//       "Developed a cross-platform Flutter app, reducing manual record-keeping by 40%.",
//     ],
//   },
// ];

// export default function Experience() {
//   return (
//     <section className="py-20 bg-white" id="experience">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6">
//         <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
//           Experience
//         </h2>
//         <div className="space-y-10">
//           {experiences.map((exp, idx) => (
//             <div key={idx} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 bg-white">
//               <div className="flex items-center space-x-4 mb-4">
//                 <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain mr-2"/>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
//                   <p className="text-sm text-gray-700">{exp.company}</p>
//                   <p className="text-xs text-gray-500">{exp.location}</p>
//                 </div>
//               </div>
//               <p className="text-sm text-gray-600 mb-3"><strong>Duration:</strong> {exp.duration}</p>
//               <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
//                 {exp.points.map((pt, i) => (
//                   <li key={i}>{pt}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
