import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (data) => {
    setIsSending(true);
    toast.info("⏳ Sending your message...", {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: true,
    });

    try {
      const resp = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!resp.ok) throw new Error("Failed to send message");

      toast.success("✅ Thanks for submitting your query!", {
        position: "top-center",
        autoClose: 2500,
      });
      reset();
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("❌ Failed to send message. Please try again later.", {
        position: "top-center",
        autoClose: 3000,
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="relative flex items-top justify-center sm:items-center py-8 sm:py-10">
        <div className="max-w-5xl mx-auto sm:px-2 lg:px-4">
          <div className="overflow-hidden">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl flex justify-center items-center mb-4">
              Contact Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LEFT CARD */}
              <div className="p-5 bg-gray-200 rounded-lg shadow-sm border border-gray-300">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight mb-2">
                  Get in touch:
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mb-3">
                  Fill in the form to start a conversation
                </p>

                {/* Address */}
                <div className="flex items-start mt-4 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-64 sm:w-80">
                    Near Ganpati Temple, Ganpati Nagar, Bhusawal, Maharashtra,
                    425307
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center mt-3 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H7a4 4 0 01-4-4V5z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +91-9373563769
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center mt-3 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-60">
                    Boroleujval4@gmail.com
                  </div>
                </div>
              </div>

              {/* RIGHT FORM */}
              <form
                className="p-3 sm:p-2 flex flex-col justify-center"
                id="queryForm"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-wrap justify-center gap-2">
                  <input
                    type="text"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    placeholder="Name"
                    {...register("from_name", { required: "Name is required" })}
                  />
                  <input
                    type="email"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    placeholder="Email"
                    {...register("reply_to", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-2">
                  <input
                    type="text"
                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    placeholder="Phone"
                    {...register("phone_number", {
                      required: "Phone number is required",
                      minLength: { value: 8, message: "Phone number is not valid" },
                    })}
                  />
                  <input
                    type="text"
                    className="w-100 mt-4 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    placeholder="Subject"
                    {...register("subject", {
                      required: "Subject is required",
                      minLength: {
                        value: 10,
                        message: "Minimum 10 characters required",
                      },
                    })}
                  />
                </div>

                <textarea
                  className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                  placeholder="Your message"
                  {...register("message", {
                    required: "Message is required",
                    minLength: { value: 20, message: "Minimum 20 characters required" },
                    maxLength: { value: 500, message: "Maximum 500 characters allowed" },
                  })}
                />

                <button
                  type="submit"
                  disabled={isSending}
                  className={`md:w-32 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300 ${
                    isSending
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-orange-700 hover:bg-orange-600"
                  }`}
                >
                  {isSending ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
