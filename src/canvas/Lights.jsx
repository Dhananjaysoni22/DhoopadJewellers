export default function Lights() {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 4, 5]} intensity={0.4} />
      <directionalLight position={[-3, 2, 4]} intensity={0.25} />
    </>
  );
}
