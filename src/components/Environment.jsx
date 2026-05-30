import {Float, useGLTF} from '@react-three/drei'
import { asset } from '../utils.js'

const Environment = (props) => {
    const { nodes, materials } = useGLTF(asset('/models/Environment.glb'))

    return (
        <Float floatIntensity={1}>
            <group positon={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.08} {...props}>
                <mesh geometry={nodes.Object_2.geometry} material={materials.Castle_blocks} />
                <mesh geometry={nodes.Object_3.geometry} material={materials.Castle_n_pillar} />
                <mesh geometry={nodes.Object_4.geometry} material={materials.Grass_1} />
                <mesh geometry={nodes.Object_5.geometry} material={materials.Grass_1} />
                <mesh geometry={nodes.Object_6.geometry} material={materials.Ground} />
                <mesh geometry={nodes.Object_7.geometry} material={materials.Lush_grass} />
                <mesh geometry={nodes.Object_8.geometry} material={materials.Pine_tree} />
                <mesh geometry={nodes.Object_9.geometry} material={materials.Stones} />
                <mesh geometry={nodes.Object_10.geometry} material={materials.Stump_tree} />
                <mesh geometry={nodes.Object_11.geometry} material={materials.Veins} />
            </group>
        </Float>
    )
}

useGLTF.preload(asset('/models/Environment.glb'))

export default Environment
