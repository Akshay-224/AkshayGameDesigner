import React, {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";
import { asset } from "../utils.js";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () =>{
        navigator.clipboard.writeText("akshayarul007@gmail.com");
        setHasCopied(true);

        setTimeout(() => { setHasCopied(false); }, 2000)
    }
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6
            md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                    <img src={asset("/assets/Avatar2.png")}
                         alt="grid-1" className="w-full sm:h-[276px] h-fit
                         object-contain" />

                        <div>
                            <p className="grid-headtext">Hello, I'm Akshay</p>
                            <p className="grid-subtext">I’m a final year Game Design student with a passion for
                                creating intense gameplay experiences through combat design, movement mechanics, and
                                player progression systems. I love game design because it allows me to create the
                                kinds of experiences I always wanted to play, worlds that reward mastery,
                                create tension, and leave players with a sense of adrenaline, fear,
                                and accomplishment.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src={asset("/assets/GameDesignSpecialization.png")} alt="grid-2"
                         className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Design Specializations </p>
                            <p className="grid-subtext">Specializing in combat design, gameplay mechanics, level design,
                                environmental storytelling, narrative design, and game balance to create immersive
                                and challenging player experiences. </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex
                        justify-center items-center">
                            <Globe
                            height={326}
                            width={326}
                            backgroundColor="rgba(0, 0, 0, 0)"
                            backgroundImageOpacity={0.5}
                            showAtmosphere
                            showGraticules
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat:12.9629, lng:77.5775,
                                text: "I'm here!",
                                color: 'white',
                                size: 100,
                            }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I can work remotely across most timezones.
                            </p>
                            <p className="grid-subtext">I'm based in India,
                            with remote work available.</p>
                            <a href="#contact" className="w-fit">
                            <Button name="Contact Me" isBeam
                                    containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src={asset("/assets/TechStack.png")} alt="grid-3"
                        className="w-full sm:h-[266px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">
                                My Technical Tools</p>
                            <p className="grid-subtext">
                                Industry-standard tools I use for gameplay design,
                                world-building, prototyping, 3D creation, and visual development.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src={asset("/assets/grid4.png")} alt="grid-4"
                             className="w-full md:h-[126px] sm:h-[276px]
                             h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? asset('assets/tick.svg') : asset('assets/copy.svg')}
                                alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium
                                text-gray_gradient text-white">
                                    akshayarul007@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default About
