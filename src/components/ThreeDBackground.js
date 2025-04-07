import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const RotatingSphere = () => {
  const sphereRef = useRef();

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.005; // Smooth rotation
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#1e90ff" metalness={0.5} roughness={0.1} />
    </mesh>
  );
};

const ThreeDBackground = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />
      <RotatingSphere />
    </Canvas>
  );
};

export default ThreeDBackground;
