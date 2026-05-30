import React from 'react'
import { asset } from "../utils.js";

const Footer = () => {
    return (
        <section
            className="c-space pt-7 pb-3 border-t border-black-300
            flex justify-between items-center flex-wrap gap-5"
        >

            {/* Left Side */}
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3">

                {/* LinkedIn */}
                <div className="relative group">
                    <a
                        href="https://www.linkedin.com/in/akshay-s-a-6923a628b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon hover:scale-110 transition-transform duration-300"
                    >
                        <img
                            src={asset("/assets/LinkedInLogo.png")}
                            alt="linkedin"
                            className="w-1/2 h-1/2"
                        />
                    </a>

                    <span
                        className="absolute -top-10 left-1/2 -translate-x-1/2
                        opacity-0 group-hover:opacity-100
                        transition duration-300
                        bg-black-200 text-white text-xs
                        px-3 py-1 rounded-md whitespace-nowrap"
                    >
                        Let's Connect
                    </span>
                </div>

                {/* Discord */}
                <div className="relative group">
                    <a
                        href="https://discord.com/users/727040244859535440"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon hover:scale-110 transition-transform duration-300"
                    >
                        <img
                            src={asset("/assets/DiscordLogo.png")}
                            alt="discord"
                            className="w-1/2 h-1/2"
                        />
                    </a>

                    <span
                        className="absolute -top-10 left-1/2 -translate-x-1/2
                        opacity-0 group-hover:opacity-100
                        transition duration-300
                        bg-black-200 text-white text-xs
                        px-3 py-1 rounded-md whitespace-nowrap"
                    >
                        Discord
                    </span>
                </div>

                {/* Instagram */}
                <div className="relative group">
                    <a
                        href="https://www.instagram.com/_draconia_art/#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon hover:scale-110 transition-transform duration-300"
                    >
                        <img
                            src={asset("/assets/instagram.svg")}
                            alt="instagram"
                            className="w-1/2 h-1/2"
                        />
                    </a>

                    <span
                        className="absolute -top-10 left-1/2 -translate-x-1/2
                        opacity-0 group-hover:opacity-100
                        transition duration-300
                        bg-black-200 text-white text-xs
                        px-3 py-1 rounded-md whitespace-nowrap"
                    >
                        Instagram
                    </span>
                </div>

            </div>

            {/* Copyright */}
            <p className="text-white-500">
                Copyright © 2026 Akshay | Game Designer. All rights reserved.
            </p>

        </section>
    )
}

export default Footer