// RotatingText.js
import React, { useRef } from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const RotatingText = ({ text, radius = 5 }) => {
    const textRef = useRef();
    let angle = useRef(0);

    // Circular rotation logic
    useFrame(() => {
        if (textRef.current) {
            angle.current += 0.01; // Adjust the speed of rotation
            textRef.current.position.x = radius * Math.cos(angle.current); // X position on the circle
            textRef.current.position.z = radius * Math.sin(angle.current); // Z position on the circle
        }
    });

    return (
        <Text
            ref={textRef}
            position={[radius, 0, 0]}  // Start position on the circle
            fontSize={0.5}             // Adjust the font size
            color="black"              // Set the text color
        >
            {text}
        </Text>
    );
};

export default RotatingText;



