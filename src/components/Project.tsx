import { type FC, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import Projects from "./Projects";

const Project: FC = () => {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const paragraph2Ref = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    const split = new SplitText(paragraphRef.current, { type: "words" });
    gsap.from(split.words, {
      opacity: 0,
      y: 50,
      filter: "blur(5px)",
      stagger: 0.05,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
    });
    gsap.from(paragraph2Ref.current, {
      opacity: 0,
      y: 50,
      filter: "blur(5px)",
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: paragraph2Ref.current,
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="h-[250vh] bg-[var(--color-creamy-white)]">
      <div className="flex-evenly h-1/3">
        <p
          ref={paragraphRef}
          className="max-w-[25ch] text-4xl leading-12 font-normal text-[var(--color-dark-gray)]"
        >
          Helping brands shine in the digital age. Together, we&apos;ll redefine
          the standard, always at the forefront of innovation.
        </p>
        <p
          ref={paragraph2Ref}
          className="max-w-[23ch] text-lg text-[var(--color-dark-gray)]"
        >
          With a passion for design, code, and interaction, I bring a unique
          perspective to the ever-evolving field of web design.
        </p>
      </div>
      <p className="mb-4 ml-39 text-xs text-[var(--color-soft-gray)]">
        RECENT WORK
      </p>
      <div className="flex flex-col items-center justify-center gap-3">
        <hr className="w-[1040px] text-[var(--color-soft-gray)]" />
        <Projects title="CANTEENAPP" url="" />
        <Projects title="MIXMOTION" url="" />
        <Projects title="DUMMY 1" url="" />
        <Projects title="DUMMY 2" url="" />
      </div>
    </section>
  );
};

export default Project;
