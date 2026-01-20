import RingText from "./sections/RingText";
export default function ScrollUI() {
  return (
    <>
      <section className="section intro">{/* <IntroText /> */}</section>

      <section className="section ring">
        <RingText />
      </section>
    </>
  );
}
