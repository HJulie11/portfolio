import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

const Box = () => (
  <mesh rotation={[0.5, 0.5, 0]}>
    <boxGeometry />
    <meshStandardMaterial color="hotpink" />
  </mesh>
)

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />
      <Suspense fallback={null}>
        <Box />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
