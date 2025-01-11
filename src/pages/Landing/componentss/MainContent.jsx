import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

const MainContent = () => {
  const { t } = useTranslation(); 
  const [email, setEmail] = useState("");

  const handleGetStarted = () => {
    if (!email) {
      alert(t("enterValidEmail")); 
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert(t("invalidEmailFormat"));
      return;
    }

    const templateParams = {
      to_email: email,
    };

    emailjs
      .send(
        "service_8k7udnw",
        "template_pqwhy4h", 
        templateParams,
        "UJkM4ka4TOCOxC1jb"
      )
      .then(
        (response) => {
          console.log(t("emailSentSuccess"), response);
          alert(t("startedWithEmail", { email })); 
          setEmail("");
        },
        (error) => {
          console.error(t("emailSendError"), error);
          alert(t("somethingWentWrong"));
        }
      );
  };

  return (
    <div className="relative z-10 text-center text-white max-w-2xl px-4">
      <h1 className="text-3xl md:text-6xl font-bold mb-4">{t("entryTitle")}</h1>
      <p className="text-lg md:text-xl mb-6">{t("entrySubtitle")}</p>
      <p className="text-md md:text-lg mb-4">{t("readyToWatch")}</p>
      <div className="flex flex-wrap justify-center gap-2">
        <input
          type="email"
          placeholder={t("emailPlaceHolder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3 w-full md:w-2/3 lg:w-1/2 rounded-md border text-black border-gray-700 focus:outline-none"
        />
        <button
          onClick={handleGetStarted}
          className="bg-red-600 text-white px-4 py-3 rounded-md hover:bg-red-700 transition w-full md:w-auto"
        >
          {t("getStarted")}
        </button>
      </div>
    </div>
  );
};

export default MainContent;
