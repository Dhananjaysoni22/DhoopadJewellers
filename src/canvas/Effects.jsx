import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

export default function Effects() {
  return (
    <EffectComposer>
      <Bloom intensity={0.35} luminanceThreshold={0.4} />
      <Vignette offset={0.15} darkness={0.6} />
    </EffectComposer>
  );
}
