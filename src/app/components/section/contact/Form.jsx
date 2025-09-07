"use client";

import { useState } from "react";
import Button from "../../elements/button";
import { FaWhatsapp } from "react-icons/fa";

export default function FormContact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ wichError: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null); // reset error kalau user ubah input
  };

  // Sent Message
  const sentMessage = async (e) => {
    e.preventDefault();

    const { name, email, message } = form;

    if (!name || !email || !message) {
      setError({
        wichError: "undifined",
        message: "Please fill in all fields",
      });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/sentMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      console.log(data);

      if (!res.ok) {
        setError({ wichError: data.wichData, message: data.message });
        return;
      }

      alert("Your message has been sent!");
    } catch (err) {
      console.error(err);
      setError({
        wichError: "server",
        message: "Server error, try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      id="contact"
      onSubmit={(e) => sentMessage(e)}
      className="w-full max-w-lg mx-auto flex flex-col gap-6 px-5 py-10"
    >
      <h2 className="text-4xl font-semibold text-primary text-center font-montserrat">
        ⚒️Contact🛠️
      </h2>

      {/* Name/Company */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name / Company
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name or company"
          required
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <p
          className={`${
            error?.wichError === "name" ? "" : "hidden"
          } text-sm text-red-500`}
        >
          {error?.message}
        </p>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <p
          className={`${
            error?.wichError === "email" ? "" : "hidden"
          } text-sm text-red-500`}
        >
          {error?.message}
        </p>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          placeholder="Write your message here..."
          required
          className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <p
          className={`${
            error?.wichError === "message" ? "" : "hidden"
          } text-sm text-red-500`}
        >
          {error?.message}
        </p>
      </div>

      {/* Button */}
      <Button text={loading ? "Sending..." : "Send Message"} type="submit" />

      <p
        className={`${
          error?.wichError === "undifined" || error?.wichError === "server"
            ? ""
            : "hidden"
        } text-sm text-red-500`}
      >
        {error?.message}
      </p>

      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-700 text-lg">Or call us from</p>
        <button
          onClick={() =>
            (window.location.href =
              "https://wa.me/+6285782599453?text=What we can help you?")
          }
          className="flex items-center gap-2 px-5 py-3 bg-green-500 hover:bg-green-600 text-white font-medium shadow-md transition-all"
        >
          <FaWhatsapp className="text-2xl" />
          WhatsApp
        </button>
      </div>
    </form>
  );
}
