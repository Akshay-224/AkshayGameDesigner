import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import Gameboy from "../components/Gameboy.jsx";
import XboxController from "../components/XboxController.jsx";
import Environment from "../components/Environment.jsx";
import Sword from "../components/Sword.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id="home" className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hey, I am Akshay <span className="waving-hand">👋</span></p>
                <p className="hero_tag text-gray_gradient">Game Designer</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/*<Leva/>*/}
                <ErrorBoundary>
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    position={sizes.deskPosition}
                                    rotation={[0, -Math.PI/2, 0]}
                                    scale={sizes.deskScale}
                                />
                            </HeroCamera>

                        <group>
                            <Gameboy position={sizes.GameboyPosition} />
                            <XboxController position={sizes.XboxControllerPosition}/>
                            <Environment position={sizes.EnvironmentPosition}/>
                            <Sword position={sizes.SwordPosition}/>
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
                </ErrorBoundary>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Begin Exploration" isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>

            </div>
        </section>
    )
}
export default Hero
