"use client";
import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from '@emailjs/browser';

const Popup = ({ message }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <p className="text-green-500 text-sm">{message}</p>
      </div>
    </div>
  );
};
const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const form = useRef();

  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lakjnkg', 'template_irpqemh', form.current, {
        publicKey: 'ZoDks7HC0Sbi-kxkH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowPopup(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/Unobhautik">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/bhautik-prajapati-941968233/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
     
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            {alert("Email Sent secc")}
            Email sent successfully!
          </p>
        ) : (
          <form ref={form}  className="flex flex-col" onSubmit={sendEmail}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abc@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your Name
              </label>
              <input
                name="from_name"
                type="name"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="abc"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="user_subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="message"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
            {showPopup && (
              
            <div className=" flex items-center justify-center bg-green-500 text-white text-sm ml-20 mt-10 w-1/2 align-center text-center py-2 px-4 mb-4 rounded-md">
              Email sent successfully!
            </div>
          )}
          </form>
        
          
        )}
      </div> <div>  </div>
    </section>
    
  );
};

export default EmailSection;
