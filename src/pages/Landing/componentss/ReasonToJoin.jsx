import React from "react";
import television from "../../../assets/television.svg";
import profile from "../../../assets/profile.svg";
import telescope from "../../../assets/telescope.svg";
import download from "../../../assets/download.svg";
import ReasonCard from "./ReasonCard";
import { useTranslation } from "react-i18next";

const ReasonsToJoin = () => {
    const { t } = useTranslation(); 

    const items = [
        {
            title: t("reasonsToJoin.enjoyOnTv.title"),
            desc: t("reasonsToJoin.enjoyOnTv.description"),
            img: television,
        },
        {
            title: t("reasonsToJoin.downloadToWatchOffline.title"),
            desc: t("reasonsToJoin.downloadToWatchOffline.description"),
            img: download,
        },
        {
            title: t("reasonsToJoin.watchEverywhere.title"),
            desc: t("reasonsToJoin.watchEverywhere.description"),
            img: telescope,
        },
        {
            title: t("reasonsToJoin.profilesForKids.title"),
            desc: t("reasonsToJoin.profilesForKids.description"),
            img: profile,
        },
    ];

    return (
        <div className="my-16 px-4 md:px-8 lg:px-16 flex flex-col items-center">
            <p className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-center">
                {t("reasonsToJoin.title")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {items.map((item, index) => (
                    <ReasonCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ReasonsToJoin;
