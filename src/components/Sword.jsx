import {Float, useGLTF} from '@react-three/drei'
import { asset } from '../utils.js'

const Sword = (props) => {

    const { nodes, materials } = useGLTF(asset('/models/Sword.glb'))
    return (
        <Float floatIntensity={1}>
            <group position={[0, 0, 0]} scale={0.01} {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.DefaultMaterial}
                rotation={[-Math.PI / 2, 1, 1.5]}
            />
            </group>
        </Float>
    )
}

useGLTF.preload(asset('/models/Sword.glb'))

export default Sword