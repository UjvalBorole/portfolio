import React from "react";



const Showcase = ({ data, transition }) => {
  return (
    <>
      {data.map((project) => (
        <div class="w-60 mb-4 mx-4 max-w-sm bg-black border border-gray-800 rounded-lg shadow dark:bg-white dark:border-gray-700 ">
          <a href="#">
            <img
              class="p-4 h-40 w-60 rounded-t-lg"
              src={project.media.thumbnail}
              alt="product image"
            />
          </a>
          <hr />
          <div class="px-3 pb-3">
            <a href="#">
              <h5 class="text-sm font-semibold tracking-tight text-gray-800 dark:text-black">
                {project.name}
              </h5>
            </a>

            <div class="flex items-center justify-between">
              <span class="text-sm font-semibold text-gray-900 dark:text-black">
                
                {project.skills}
              </span>
              <a
                href={project.link}
                class="  text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm mt-2 px-3 py-1.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                See Detail &minus;&#8827;
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Showcase;
