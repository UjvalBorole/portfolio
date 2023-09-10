

import React from "react";

const Project = () => {
  return (
    <div className="container-sm my-5">
      <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          class="text-orange-700 hover:text-white border border-orange-600 bg-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:bg-gray-900 dark:focus:ring-white-800"
        >
          All categories
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Shoes
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Bags
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Electronics
        </button>
        <button
          type="button"
          class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Gaming
        </button>
      </div>
      <div class="container grid grid-cols-4 gap-2 mx-auto">
        <div class="w-60 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="p-4 h-40 w-60 rounded-t-lg"
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="product image"
            />
          </a>
          <div class="px-3 pb-3">
            <a href="#">
              <h5 class="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>

            <div class="flex items-center justify-between">
              <span class="text-xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a
                href="#"
                class="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm mt-2 px-2 py-1.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>

     

      </div>
    </div>
    
  );
};

export default Project;
