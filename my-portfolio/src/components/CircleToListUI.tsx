import { useState } from 'react'
import { CircleToList } from './CircleToList'

export function CircleToListUI() {
    const [radius, setRadius] = useState(5)
    const [isList, setIsList] = useState(false)

    return (
        <>
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                color: 'white',
                background: 'rgba(0,0,0,0.5)',
                padding: '10px',
                borderRadius: '10px'
            }}>
                <label>Zoom: {radius.toFixed(1)}</label>
                <input
                    type="range"
                    min="1"
                    max="10"
                    step="0.1"
                    value={radius}
                    onChange={(e) => setRadius(Number(e.target.value))}
                />
                <button onClick={() => setIsList(!isList)}>
                    Toggle Layout
                </button>
            </div>

            {/* <Canvas>
                <ambientLight />
                <CircleToList radius={radius} isList={isList} />
            </Canvas> */}
        </>
    )
}
