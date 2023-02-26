import {
  Stage,
  Grid,
  OrbitControls,
  Environment,
  Box,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Canvas, useFrame } from "@react-three/fiber";
export default (style: any) => (
  <Canvas
    style={{ ...style, backgroundColor: "transparent" }}
    gl={{ logarithmicDepthBuffer: true }}
    shadows
    camera={{ position: [-15, 0, 10], fov: 25 }}
  >
    <Box />
    <OrbitControls
      autoRotate
      autoRotateSpeed={0.05}
      enableZoom={true}
      makeDefault
    />
  </Canvas>
);
