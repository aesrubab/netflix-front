import React from "react";
import television from "../../../assets/television.svg";
import profile from "../../../assets/profile.svg";
import telescope from "../../../assets/telescope.svg";
import download from "../../../assets/download.svg";
import ReasonCard from "./ReasonCard";

const ReasonsToJoin = () => {
    const items = [
        {
            title: "Enjoy on your TV",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
            img: television,
        },
        {
            title: "Download your shows to watch offline",
            desc: "Save your favorites easily and always have something to watch.",
            img: download,
        },
        {
            title: "Watch everywhere",
            desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
            img: telescope,
        },
        {
            title: "Create profiles for kids",
            desc: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.",
            img: profile,
        },
    ];

    return (
        <div className="my-16 px-4 md:px-8 lg:px-16 flex flex-col items-center">
            <p className="text-white font-bold text-2xl md:text-3xl lg:text-4xl mb-8 text-center">
                More Reasons to Join
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
