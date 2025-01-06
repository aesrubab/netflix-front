import React, { useState } from "react";

const MainContent = () => {
  const [email, setEmail] = useState("");

  const handleGetStarted = () => {
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    console.log(`Get Started clicked with email: ${email}`);
    alert(`You have started with email: ${email}`);
  };

  return (
    <div className="relative z-10 text-center text-white max-w-2xl px-4">
      <h1 className="text-3xl md:text-6xl font-bold mb-4">
        Unlimited movies, TV shows, and more
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Starts at EUR 7.99. Cancel anytime.
      </p>
      <p className="text-md md:text-lg mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 w-full md:w-2/3 lg:w-1/2 rounded-md border text-black border-gray-700 focus:outline-none"
        />
        <button
          onClick={handleGetStarted}
          className="bg-red-600 text-white px-4 py-3 rounded-md hover:bg-red-700 transition w-full md:w-auto"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MainContent;
