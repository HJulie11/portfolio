import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Mesh } from 'three'

type SphereObjectProps = {
  count: number
}

export function SphereObjects({ count }: SphereObjectProps) {
  const groupRef = useRef<THREE.Group>(null)
  const [scattered, setScattered] = useState(false)

  const positions = new Array(count).fill(0).map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / count)
    const theta = Math.sqrt(count * Math.PI) * phi
    const radius = 5
    return new THREE.Vector3(
      radius * Math.cos(theta) * Math.sin(phi),
      radius * Math.sin(theta) * Math.sin(phi),
      radius * Math.cos(phi)
    )
  })

  const targetPositions = scattered
    ? positions.map((_, i) => new THREE.Vector3(i * 2 - count, 0, 0)) // example linear layout
    : positions

  useFrame(() => {
    groupRef.current?.children.forEach((child, i) => {
      const mesh = child as Mesh
      mesh.position.lerp(targetPositions[i], 0.1)
    })
  })

  return (
    <group ref={groupRef} onClick={() => setScattered(!scattered)}>
      {positions.map((_, i) => (
        <mesh key={i} position={positions[i]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="skyblue" />
        </mesh>
      ))}
    </group>
  )
}
