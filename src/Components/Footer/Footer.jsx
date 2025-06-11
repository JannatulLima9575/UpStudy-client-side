import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-5 p-5 border-t border-base-300 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Logo & Description Section */}
        <div className="flex flex-col justify-between">
          <div>
            <img className="h-8 w-auto" src={footerLogo} alt="Logo" />
            <p className="mt-3 text-base text-gray-300 opacity-90">
              Empowering knowledge through community.
            </p>
          </div>

          {/* Social Icons - moved down with margin-top auto */}
          <div className="pt-6">
            <div className="flex space-x-4 text-lg">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-10">
          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="link link-hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms" className="link link-hover">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border border-gray-500 w-3/4 mx-auto mt-10 opacity-60"></div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-white opacity-80">
        &copy; {new Date().getFullYear()} UPSTUDY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;