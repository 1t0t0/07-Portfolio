import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypeAnimationText = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'With Love and Passion for comercial businesses.',
                1500, // wait 1s before replacing "Mice" with "Hamsters"
                'for developing modern React web apps',
                1500,
                'Please consider me for an internship😭',
                1000,
                'I need It so hard 🙏',
                1000
            ]}
            wrapper="span"
            speed={20}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
        />

    )
}

export default TypeAnimationText