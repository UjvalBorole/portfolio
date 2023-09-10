import React from "react";
import paper from "../../source/paper.jpeg"
import { Link } from "react-router-dom";
import sih from "../../source/sih.jpeg"
import intern from "../../source/intern.jpeg"
import paper1 from "../../source/fin_irjmets1683168276.pdf"
import intern1 from "../../source/intern.pdf"
import sih1 from "../../source/TK1052.pdf"


const projectsData = [
  {
   name:"Published the Research Paper on Fingerprint Authentication System." ,
   detail:"A fingerprint authentication system is essential for identifying users whose fingerprint images have been altered or damaged due to various reasons. Alterations to fingerprints can occur due to injuries, age, or other factors, making raditional fingerprint recognition systems less accurate.",
   href:paper,
   wd:paper1,
  },
  {
    name:"Smart India Hackathon 2022" ,
    detail:"  Our project, the Hospital Bed Management System, aims to optimize and streamline the process of bed allocation in hospitals, ensuring efficient resource management during times of high demand. By leveraging technology and data-driven algorithms, our solution can provide real-time updates on bed availability, helping healthcare providers make informed decisions and improve patient care.",
    href:sih,
    wd:sih1,
   },
   {
    name:"Software Devlopment Intern - Aapliweb" ,
    detail:"Successfully enhanced innovative module integration and modernized database restructuring.  Developed a PHP fertilizer sales app and transformed it into an Android application using cutting-edge Android tools.",
    href:intern,
    wd:intern1,
   },
];
const Block = () => {
  return (
    
    <div className="container-xl sm:ml-5 md:ml-12 pt-5 mt-12">
      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl flex justify-center items-center">
                             Blogs
                        </h2><br />
    {/* <span className="text-4xl font-bold flex justify-center item-center">Blogs</span> <br /> */}
      <div class="flex flex-wrap mx-10 ">
    {projectsData.map((item)=>(
        <div class="max-w-sm bg-black border border-gray-900 rounded-lg shadow dark:bg-white dark:border-gray-800 mb-5 mr-5">
          <a href="#">
            <img
              class="rounded-t-lg max-h-80 w-full "
              src={item.href}
              alt=""
            />
          </a>
          <hr />
          
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
               {item.name}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-600">
            {item.detail}
            </p>
            <Link
              to="/"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              onClick={()=>window.open(item.wd)}
            >
              Read more
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>

))}
      </div>
        
    </div>
  );
};

export default Block;
