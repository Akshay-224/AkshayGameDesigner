import {Float, useGLTF} from '@react-three/drei'
import { asset } from '../utils.js'

const XboxController = (props) => {

    const { nodes, materials } = useGLTF(asset('/models/XboxController.glb'))
    return (
        <Float floatIntensity={1}>
            <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.node_id30.geometry}
                material={materials['47']}
                position={[-22, 0 , 4]}
                rotation={[0, -1.2, -0.5]}
                scale={0.1}
            />
            </group>
        </Float>
    )
}

useGLTF.preload(asset('/models/XboxController.glb'))

export default XboxController