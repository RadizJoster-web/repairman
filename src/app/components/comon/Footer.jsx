"use client";

import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
import "./footer.css";

export default function Footer() {
  const socials = [
    { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
    { name: "TikTok", icon: <FaTiktok />, url: "https://tiktok.com" },
    { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
    { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com" },
    { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <Link href="/" className="w-[150px]">
          <div>
            <Image
              src="/repairman-logo.png"
              alt="Repairman Logo"
              width={150}
              height={120}
              className="hover:scale-110 transition-all duration-300 cursor-pointer"
            />
          </div>
        </Link>

        {/* Our Store */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Store</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/#About" className="hover:text-primary">
                About
              </a>
            </li>
            <li>
              <a href="/#Service" className="hover:text-primary">
                Service
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-primary">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center space-x-2">
              <span className="text-primary">📍</span>
              <p>
                2443 <span className="font-semibold">Konoha Gakure</span>, QA
                45065
              </p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">📞</span>
              <p>0123456789</p>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">✉️</span>
              <p>repairman@gmail.com</p>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-lg font-semibold mb-4">Follow Us</h1>
          <ul className="example-2 flex gap-2 justify-stert items-end flex-wrap">
            {socials.map((social, idx) => (
              <li className="icon-content" key={idx}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-social={social.name}
                >
                  <div className="filled"></div>
                  {social.icon}
                </a>
                <div className="tooltip">{social.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-10 border-t border-gray-700 pt-6 text-sm text-gray-400">
        Copyright © 2025 Reapirman | Powered by Reapirman
      </div>
    </footer>
  );
}
