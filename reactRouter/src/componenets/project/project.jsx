import React, { useState } from "react";
import Filters from "./filter";
import Showcase from "./showcase";
import app from "../../source/app.png"
import head from "../../source/head.jpg"
import ecom from "../../source/ecom.png"
import fas from "../../source/fas.png"
import news from "../../source/news.jpg"
import opfd from "../../source/opfd.png"
import textutil from "../../source/textutil.png"
import assis from "../../source/assis.jpeg"




const projectsData = [
    {
        id: 1,
        name: "Online Payment Fraud Detection System",
        link: "https://github.com/UjvalBorole/OPFDS",
        skills:"django,ML",
        tags: ["web-app","ml"],
        media: {
            thumbnail: opfd,
        },
    },
    {
        id: 2,
        name: "ToMany-Ecommerce Application",
        link: "https://github.com/UjvalBorole/Tomany",
        skills:"Flutter,Django",
        tags: ["mobile-app","mobile-app"],
        media: {
            thumbnail: app,
        },
    },
    {
        id: 3,
        name: "Voice Assistant Bot",
        link: "https://github.com/UjvalBorole/voice-asistant-using-chatgpt",
        skills:"Flutter,Chatgpt",
        tags: ["web-page","ml","mobile-app"],
        media: {
            thumbnail: assis,
        },
    },
    {
        id: 4,
        name: "Fingerprint Authentication System",
        link: "https://github.com/UjvalBorole/Fingerprint-Authentication-System",
        skills:"ML,Django",
        tags: ["web-app","ml"],
        media: {
            thumbnail: fas,
        },
    },
    {
        id: 5,
        name: "To-Many-Ecommerce site",
        link: "https://github.com/UjvalBorole/To-Many",
        skills:"Django,Frontend Tech",
        tags: ["web-app"],
        media: {
            thumbnail: ecom,
        },
    },
    {
        id: 6,
        name: "News web App",
        link: "https://github.com/UjvalBorole/news/tree/main/currentNews",
        skills:"PHP,MYSQL,Other Tech",
        tags: ["product", "web-app",],
        media: {
            thumbnail: news,
        },
    },
    {
        id: 7,
        name: "HeadNews",
        link: "https://github.com/UjvalBorole/HeadNews",
        skills:"React,NewsAPI",
        tags: ["web-app"],
        media: {
            thumbnail: head,
        },
    },
    {
        id: 8,
        name: "TextUtils - Analyzing Your Text",
        link: "https://github.com/UjvalBorole/TextUtil-Analyzing-Your-Text",
        skills:"React,Node,  Express",
        tags: ["web-app", "web-page"],
        media: {
            thumbnail: textutil,
        },
    },
];

const Project = () => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <div className="container-xl md:mx-auto mb-5 "> 
        <br />
        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl flex justify-center items-center">
                             Projects
                        </h2>
          <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
            <Filters filterProjects={(tag) => filterProjects(tag)} />
          </div>
          <div class="container ml-10 md:flex md:flex-wrap md:gap-5 grid grid-cols-1 gap-2 w-50 h-50">
            <Showcase
                        data={projects}
                        transition={transition}
                    />
          </div>
          <br />
         </div>
        
      );
};


export default Project;
