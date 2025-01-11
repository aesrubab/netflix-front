import React from "react";
import { useTranslation } from "react-i18next"; 

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <h3 className="text-center text-xl mb-6">
          {t("footer.readyToWatch")} 
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder={t("emailPlaceHolder")} 
            className="w-full sm:w-96 px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
          />
          <button className="bg-red-600 text-white px-6 py-2 rounded mt-4 sm:mt-0 sm:ml-4">
            {t("getStarted")} 
          </button>
        </div>
        <p className="mt-6 text-gray-400 text-left">
          <a href="#" className="hover:underline">{t("footer.contactUs")}</a>
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8 text-sm">
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.0")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.1")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.2")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.3")}
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.4")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.5")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.6")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.7")}
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.8")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.9")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.10")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.11")}
              </a>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.12")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.13")}
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-gray-400">
                {t("footer.links.14")}
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
              {t("footer.footerBrand")} 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
