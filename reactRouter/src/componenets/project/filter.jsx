import React, { useState } from "react";

const filtersData = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "ML",
    id: "ml",
  },
  {
    name: "Web Apps",
    id: "web-app",
  },
  {
    name: "Mobile Apps",
    id: "mobile-app",
  },
  {
    name: "Products",
    id: "product",
  },
];

const Filters = ({ filterProjects }) => {
  const [active, setActive] = useState("");

  const clickHandler = (id) => {
    setActive(id);
    filterProjects(id);
  };

  return (
    <div>
      {filtersData.map((item) => (
        <button
          type="button"
          className={`${
            active === item.id
              ? "text-orange-700 hover:text-white border border-orange-600 bg-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:bg-gray-100 dark:focus:ring-gray-800"
              : "text-orange-700 hover:text-white border border-orange-600 bg-white hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:hover:bg-orange-500 dark:bg-gray-100 dark:focus:ring-gray-800"
          } `}
          onClick={() => clickHandler(item.id)}
        >
          {item.name}
        </button>
      ))}
      
    </div>
  );
};

export default Filters;
