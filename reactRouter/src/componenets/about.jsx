import React from "react";
import Techpng from "../source/tech-icons.png"

export default function About() {
    return (
        <div className="py-12">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            className="w-50"
                            src={Techpng}
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl flex justify-center items-center">
                             About Me
                        </h2>
                        <p className="mt-6 text-gray-600">
                        I'm Ujval Borole, a final-year Computer Science and Engineering student. Passionate about tech, coding, and problem-solving. Aspiring software engineer.
                        </p>
                        <p className="mt-4 text-gray-600">
                        My focus is on designing and developing websites and Applications that look great and work well. I am skilled in a range of programming languages and platforms, including HTML, CSS, JavaScript, SQL, Python ,Django , React and Dart Flutter. I have worked on websites and applications for different industries, such as Blogging, e- commerce, and education.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}