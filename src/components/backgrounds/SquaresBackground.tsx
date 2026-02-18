'use client'

import Squares from '@/components/backgrounds/Squares'

export default function SquaresBackground() {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: 1,
                overflow: 'hidden'
            }}
        >
            <Squares
                speed={0.5}
                squareSize={50}
                direction='diagonal'
                borderColor='#3B3347'
                hoverFillColor='#222222'
            />
        </div>
    )
}
