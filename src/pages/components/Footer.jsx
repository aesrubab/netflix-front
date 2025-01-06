import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <h3 className="text-center text-xl mb-6">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:w-96 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <button className="bg-red-600 text-white px-6 py-2 rounded mt-4 sm:mt-0 sm:ml-4">
            Get Started &gt;
          </button>
        </div>
        <p className="mt-6 text-gray-400 text-left">
          Questions? <a href="#" className="hover:underline">Contact us.</a>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8 text-sm">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Investor Relations
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Speed Test
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Cookie Preferences
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Legal Notices
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Ways to Watch
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Corporate Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Only on Netflix
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Media Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-start">
          <div>
            <select
              className="bg-black text-white border border-gray-600 px-4 py-2 rounded"
            >
              <option>English</option>
              <option>Azerbaijani</option>
            </select>
            <p className="mt-2 text-gray-400 text-left">
              Netflix Azerbaijan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
