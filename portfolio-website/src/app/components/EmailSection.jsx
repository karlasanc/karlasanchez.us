"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  // track whether message was sent for user
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  // async function to handle form submissions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // request for sending data to the server
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    //submit data & return response
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true); //set state status
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 py-14 gap-4 relative">
      {/* Paint splat image */}
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-tertiary-900 to-transparent rounded-full blur-lg top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* left column */}
      <div className="relative z-10">
        <h5 className="font-gabriela text-6xl lg:text-6xl text-orange-600 my-4">Let's Connect</h5>
        <p className="text-slate-200 mb-4 max-w-md">
          {" "}
          I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want
          to say hi, I'll try my best to get back to you!
        </p>

        {/* social media links */}
        <div className="socials flex flex-row gap-2 mb-10">
          <Link href="https://github.com/karlasanc" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/karlasanc/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>

      {/* right column */}
      <div className="relative z-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          {/* Email input */}
          <div className="mb-6">
            <label htmlFor="email" className="text-stone-200 mb-2 block text-lg font-medium">
              Your email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              className="z-10 bg-bgSecondaryBlack border border-bgSecondaryBlue placeholder-stone-400 text-stone-200 text-md rounded-lg block w-full p-2.5"
              placeholder="email@example.com"
              required
            />
          </div>

          {/* Subject input */}
          <div className="mb-6">
            <label htmlFor="subject" className="text-stone-200 mb-2 block text-lg font-medium">
              Subject
            </label>
            <input
              name="subject"
              id="subject"
              type="text"
              className="z-10 bg-bgSecondaryBlack border border-bgSecondaryBlue placeholder-stone-400 text-stone-200 text-md rounded-lg block w-full p-2.5"
              placeholder="Just saying hi!"
              required
            />
          </div>

          {/* Text Area */}
          <div className="mb-6">
            <label htmlFor="message" className="text-stone-200 mb-2 block text-lg font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="z-10 bg-bgSecondaryBlack border border-bgSecondaryBlue placeholder-stone-400 text-stone-200 text-md rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          {/* Submit Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="z-10 bg-orange-600 text-white hover:bg-yellow-500  font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {/* message successful */}
            {emailSubmitted && <p className="text-green-400 text-md mt-2">Email sent successfully!</p>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
