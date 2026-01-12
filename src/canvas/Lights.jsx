export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 3]} intensity={0.4} />
      <directionalLight position={[-3, 2, 4]} intensity={0.25} />
    </>
  );
}
