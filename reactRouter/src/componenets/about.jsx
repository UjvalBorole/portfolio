import React from "react";
import Techpng from "../source/tech-icons.png";

export default function About() {
  return (
    <div className="py-12 ">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-10 lg:items-center lg:gap-16">
          
          {/* Image Section */}
          <div className="md:w-5/12 lg:w-4/12 flex justify-center">
            <img
              className="w-64 h-64 md:w-80 md:h-80 object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
              src={Techpng}
              alt="Tech Stack"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-7/12 lg:w-8/12">
            <h2 className="text-3xl text-gray-900 font-extrabold md:text-4xl text-center md:text-left">
              About Me
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              I build backend platforms, streaming data pipelines, and low-latency broadcast systems.
              I care about measurable results — reduced latency, increased throughput, and improving developer experience.
            </p>

            <ul className="mt-6 text-gray-700 list-disc list-inside space-y-3 leading-relaxed">
              <li>
                <strong>Design and implement:</strong> resilient microservices with Spring Boot
              </li>
              <li>
                <strong>Event-driven architecture:</strong> stream processing with Kafka and RabbitMQ
              </li>
              <li>
                <strong>Caching and performance:</strong> in-memory acceleration using Redis
              </li>
              <li>
                <strong>Containerization & orchestration:</strong> Docker, Kubernetes
              </li>
              <li>
                <strong>CI/CD & Monitoring:</strong> Jenkins, Prometheus, Grafana
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
