import { send } from "emailjs-com";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// service_ths8cng   template_4vnsc1h   t0Q-2S115EvYf9PQE
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_ths8cng", "template_4vnsc1h", data, "t0Q-2S115EvYf9PQE")
      .then((resp) => {
        formSuccess();
        console.log("Success", resp.status, resp.text);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const formSuccess = () => {
    toast("Thanks for submitting your Query!");
    document.getElementById("queryForm").reset();
  };
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      
      <div className="relative flex items-top justify-center min-h-[700px] sm:items-center sm:pt-0">
        <div className="max-w-5xl mx-auto sm:px-2 lg:px-4">
          <div className="overflow-hidden">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl flex justify-center items-center">
                             Contact Us
                        </h2>
                        <br />
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-3 mr-2 bg-gray-200 sm:rounded-lg border-black">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                  Get in touch:
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-80">
                    Near Ganpati Temple, Ganpati Nagar, Bhusawal, Maharashtra ,
                    425307
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +91-9373563769
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Boroleujval4@gmail.com
                  </div>
                </div>
              </div>

              <form
                className="p-3 sm:p-2 flex flex-col justify-center "
                id="queryForm"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2"> */}
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="">
                    <label for="name" className="hidden">
                      Full Name
                    </label>

                    <div className="input-field">
                      <input
                        type="text"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        name="from_name"
                        placeholder="Name"
                        {...register("from_name", {
                          required: "Name is required",
                        })}
                      />
                      {errors.from_name?.message && (
                        <p className="error">{errors.from_name?.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="">
                    <label for="email" className="hidden">
                      Email
                    </label>
                    <div className="input-field">
                      <input
                        type="email"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        name="reply_to"
                        placeholder="Email"
                        {...register("reply_to", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.reply_to?.message && (
                        <p className="error">{errors.reply_to?.message}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <div className="mt-2 ">
                    <label for="tel" className="hidden">
                      Subject
                    </label>
                    <div className="input-field">
                      <input
                        type="text"
                        className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        name="phone_number"
                        placeholder="Phone"
                        {...register("phone_number", {
                          required: "Phone number is required",
                          minLength: {
                            value: 8,
                            message: "Phone number is not valid",
                          },
                        })}
                      />
                      {errors.phone_number?.message && (
                        <p className="error">{errors.phone_number?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="">
                    <label for="tel" className="hidden">
                      Number
                    </label>
                    <div className="input-field">
                      <input
                        type="text"
                        className="w-100 mt-4 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject", {
                          required: "Subject is required",
                          minLength: {
                            value: 10,
                            message: "Minimum 10 characters required",
                          },
                        })}
                      />
                      {errors.subject?.message && (
                        <p className="error">{errors.subject?.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-2">
                  <label for="tel" className="hidden">
                    Massage
                  </label>
                  <textarea
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    name="message"
                    placeholder="Your message"
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message: "Minimum 20 characters required",
                      },
                      maxLength: {
                        value: 500,
                        message: "Maximum 500 characters allowed",
                      },
                    })}
                  />
                  {errors.message?.message && (
                    <p className="error">{errors.message?.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="md:w-32 bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
