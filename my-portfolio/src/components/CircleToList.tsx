import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Mesh } from 'three'

type Props = {
    radius: number
    setRadius: (r: number) => void
    isList: boolean
}

// export function CircleToList({ radius, isList }: { radius: number; isList: boolean }) {
export function CircleToList({radius, setRadius, isList} : Props) {
    const groupRef = useRef<THREE.Group>(null)
    const itemCount = 10

    const circlePositions = useMemo(() => {
        return [...Array(itemCount)].map((_, i) => {
            const angle = (i / itemCount) * Math.PI * 2
            return new THREE.Vector3(
                radius * Math.cos(angle),
                radius * Math.sin(angle),
                0
            )
        })
    }, [radius])

    const listPositions = useMemo(() => {
        return [...Array(itemCount)].map((_, i) => {
            return new THREE.Vector3(0, (itemCount / 2 - i) * -1.5, 0)
        })
    }, [])

    const targetPositions = isList ? listPositions : circlePositions

    useFrame(() => {
        groupRef.current?.children.forEach((child, i) => {
            const mesh = child as Mesh
            mesh.position.lerp(targetPositions[i], 0.1)
            mesh.rotation.y += 0.01 // Rotate the spheres
        })
    })

    return (
        <group ref={groupRef}>
            {targetPositions.map((_, i) => (
                <mesh key={i} position={targetPositions[i]}>
                    {/* <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={0.5} /> */}
                    <sphereGeometry args={[0.3, 16, 16]} />
                    <meshStandardMaterial color="skyblue" metalness={0.5} />
                </mesh>
            ))}
        </group>
    )
}
