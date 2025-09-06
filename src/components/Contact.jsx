import React from "react";
import { useState, useRef } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [status, setStatus] = useState("");
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Step 4: Use emailjs.sendForm to send the email
    emailjs
      .sendForm(
        "service_4aebian", // Replace with your EmailJS Service ID
        "template_d5ua3nr", // Replace with your EmailJS Template ID
        form.current, // The form element to send
        "-DtQBEUJammm_Zfcw" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          // Success case
          console.log(result.text);
          setStatus("Message sent successfully!");
          e.target.reset();
          setTimeout(() => setStatus(""), 5000); // Clear status after 5 seconds
        },
        (error) => {
          // Error case
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 relative bg-[#111111]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-lg text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          I'm currently available for freelance work and open to new
          opportunities. Have a project in mind? Let's talk.
        </p>

        <div className="max-w-xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name" // 'name' attribute must match your EmailJS template variable
                required
                placeholder="Your Name"
                className="peer w-full bg-[#111111] border-1 border-slate-600 text-white rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500 transition outline-none placeholder-transparent"
              />
              <label className="absolute left-4 -top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm">
                Your Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                name="email" // 'name' attribute must match your EmailJS template variable
                required
                placeholder="Your Email"
                className="peer w-full bg-[#111111] border-1 border-slate-600 text-white rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500 transition outline-none placeholder-transparent"
              />
              <label className="absolute left-4 -top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm">
                Your Email
              </label>
            </div>

            <div className="relative">
              <textarea
                name="message" // 'name' attribute must match your EmailJS template variable
                required
                rows="5"
                placeholder="Your Message"
                className="peer w-full bg-[#111111] border-1 border-slate-600 text-white rounded-lg px-4 py-3 focus:ring-purple-500 focus:border-purple-500 transition outline-none placeholder-transparent"
              ></textarea>
              <label className="absolute left-4 -top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-purple-400 peer-focus:text-sm">
                Your Message
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-lg w-full sm:w-auto inline-flex items-center justify-center gap-2 transform hover:scale-105"
              >
                Send Message <Send size={20} />
              </button>
            </div>
          </form>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("successfully")
                  ? "text-green-400"
                  : "text-blue-400"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
