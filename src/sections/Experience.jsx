import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import {Suspense, useState} from "react";
import Character from "../components/Character.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import ErrorBoundary from "../components/ErrorBoundary.jsx";

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle')
    
    return (
        <section className="c-space my-20">
            <div className="w-full text-white-600">
                <h3 className='head-text'>Professional Experience</h3>
                <div className="work-container">
                    <div className="work-canvas">
                        <ErrorBoundary>
                        <Canvas>
                            <ambientLight intensity={1.5}/>
                            <spotLight position={[10, 10, 10]} angle={0.15} penubra={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
                            <Suspense fallback={<CanvasLoader/>}>
                                <Character position-y={-3} scale={3}
                                animationName={animationName} />
                            </Suspense>
                        </Canvas>
                        </ErrorBoundary>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({ id, name, pos, icon, duration,
                                                  title, animation}) => (
                                <div key={id} className="work-content_container group"
                                    onClick={() => setAnimationName(animation.toLowerCase())}
                                onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                onPointerOut={() => setAnimationName("idle")}>
                                    <div className="flex flex-col h-full
                                    justify-center items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={icon} alt="logo"
                                            className="w-full h-full" />
                                        </div>
                                        <div className="work-content_bar" />
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                     <p className="font-bold text-white-800">
                                         {name}
                                     </p>
                                        <p className="text-sm mb-5">
                                            {pos} -- {duration}
                                        </p>
                                        <p className="group-hover:text-white transition
                                        ease-in-out duration-500 whitespace-pre-line">
                                            {title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
