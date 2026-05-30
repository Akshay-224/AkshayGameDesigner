import {Float, useGLTF} from '@react-three/drei'
import { asset } from '../utils.js'

const Gameboy = (props) => {

    const { nodes, materials } = useGLTF(asset('/models/game_boy_classic.glb'))

    return (
        <Float floatIntensity={1}>
            <group position={[11.5, 3, 0]} rotation={[-Math.PI / 2, 0, -2]} scale={0.006} {...props}>
                <mesh
                    geometry={nodes.SM_Gameboy_lambert1_0.geometry}
                    material={materials.lambert1}
                    rotation={[Math.PI / 2, 0, 0]}
                />
            </group>
        </Float>
    )
}

useGLTF.preload(asset('/models/game_boy_classic.glb'))

export default Gameboy