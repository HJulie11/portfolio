import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { CircleToList } from './components/CircleToList'
import { useState } from 'react'

function App() {
  const [radius, setRadius] = useState(10)

  return (
    <>
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight intensity={1}/>
        {/* <pointLight position={[10, 10, 10]} /> */}
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        <CircleToList radius={radius} setRadius={setRadius} isList={false} />

        <OrbitControls 
          zoomSpeed={0.05}
          minDistance={19}
          maxDistance={21}
        />
      </Canvas>
    </>
  )
}

export default App
