import RingText from "./sections/RingText";
import PlainRingText from "./sections/PlainRingText";
export default function ScrollUI() {
  return (
    <>
      <section className="section intro">{/* <IntroText /> */}</section>

      <section className="section ring">
        <RingText />
      </section>
      <section className="section plainring">
        <PlainRingText />
      </section>
    </>
  );
}
