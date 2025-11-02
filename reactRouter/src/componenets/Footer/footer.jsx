import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter } from "lucide-react";
import logo from "../../source/ujvalborole.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
        {/* MAIN GRID */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          {/* LEFT LOGO */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              className="h-10 w-10 rounded-lg object-contain"
              alt="Logo"
            />
            <span className="text-lg font-bold text-gray-900">Portfolio</span>
          </div>

          {/* MIDDLE LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-sm">
            {/* Resources */}
            <div>
              <h2 className="mb-3 font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-3 font-semibold text-gray-900 uppercase">
                Follow Us
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <a
                    href="https://github.com/UjvalBorole"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Linkedin className="w-4 h-4" />
                  <a
                    href="https://www.linkedin.com/in/ujval-borole/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-3 font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        {/* <hr className="my-6 border-gray-300 sm:mx-auto  w-full" /> */}
        <hr className="my-6 border-gray-300 w-[100vw] relative left-[50%] right-[50%] -mx-[50vw]" />


        {/* BOTTOM SECTION */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-center text-sm text-gray-600 gap-3">
          <span>
            © 2026{" "}
            <a href="#" className="hover:underline font-semibold">
              UjvalBorole
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex justify-center space-x-5">
            <Link
              to="https://leetcode.com/boroleujval4/"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill="#B3B1B0"
                  d="M22 14.355c0-.742-.564-1.346-1.26-1.346H10.676c-.696 0-1.26.604-1.26 1.346s.563 1.346 1.26 1.346H20.74c.696.001 1.26-.603 1.26-1.346z"
                ></path>
                <path
                  fill="#E7A41F"
                  d="m3.482 18.187 4.313 4.361c.973.979 2.318 1.452 3.803 1.452 1.485 0 2.83-.512 3.805-1.494l2.588-2.637c.51-.514.492-1.365-.039-1.9-.531-.535-1.375-.553-1.884-.039l-2.676 2.607c-.462.467-1.102.662-1.809.662s-1.346-.195-1.81-.662l-4.298-4.363c-.463-.467-.696-1.15-.696-1.863 0-.713.233-1.357.696-1.824l4.285-4.38c.463-.467 1.116-.645 1.822-.645s1.346.195 1.809.662l2.676 2.606c.51.515 1.354.497 1.885-.038.531-.536.549-1.387.039-1.901l-2.588-2.636a4.994 4.994 0 0 0-2.392-1.33l-.034-.007 2.447-2.503c.512-.514.494-1.366-.037-1.901-.531-.535-1.376-.552-1.887-.038l-10.018 10.1C2.509 11.458 2 12.813 2 14.311c0 1.498.509 2.896 1.482 3.876z"
                ></path>
              </svg>
              <span className="sr-only">LeetCode</span>
            </Link>

            <Link
              to="https://auth.geeksforgeeks.org/user/zaccode"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#43a047"
                  d="M29.035,24C29.014,23.671,29,23.339,29,23c0-6.08,2.86-10,7-10c3.411,0,6.33,2.662,7,7l2,0l0.001-9L43,11c0,0-0.533,1.506-1,1.16c-1.899-1.066-3.723-1.132-6.024-1.132C30.176,11.028,25,16.26,25,22.92c0,0.364,0.021,0.723,0.049,1.08h-2.099C22.979,23.643,23,23.284,23,22.92c0-6.66-5.176-11.892-10.976-11.892c-2.301,0-4.125,0.065-6.024,1.132C5.533,12.506,5,11,5,11l-2.001,0L3,20l2,0c0.67-4.338,3.589-7,7-7c4.14,0,7,3.92,7,10c0,0.339-0.014,0.671-0.035,1H0v2h1.009c1.083,0,1.977,0.861,1.999,1.943C3.046,29.789,3.224,32.006,4,33c1.269,1.625,3,3,8,3c5.022,0,9.92-4.527,11-10h2c1.08,5.473,5.978,10,11,10c5,0,6.731-1.375,8-3c.776-0.994,0.954-3.211,0.992-5.057C45.014,26.861,45.909,26,46.991,26H48v-2H29.035z"
                ></path>
              </svg>
              <span className="sr-only">GeeksforGeeks</span>
            </Link>

            <Link to="#" className="text-gray-500 hover:text-gray-800">
              <Twitter className="w-5 h-5" />
            </Link>

            <Link to="#" className="text-gray-500 hover:text-gray-800">
              <Instagram className="w-5 h-5" />
            </Link>

            <Link
              to="https://www.naukri.com/mnjuser/profile"
              className="text-gray-500 hover:text-gray-800"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
