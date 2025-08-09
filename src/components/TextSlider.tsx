// import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, type FC } from "react";

const TextSlider: FC = () => {
  const firstText = useRef<HTMLParagraphElement | null>(null);
  const secondText = useRef<HTMLParagraphElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);
  const xPercent = useRef(0); // supaya tidak reset setiap render
  const direction = useRef(0.5);

  useEffect(() => {
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => {
          direction.current = e.direction * -0.5;
        },
      },
      x: "-500px",
    });

    const animate = () => {
      if (xPercent.current < -100) {
        xPercent.current = 0;
      } else if (xPercent.current > 0) {
        xPercent.current = -100;
      }

      gsap.set(firstText.current, { xPercent: xPercent.current });
      gsap.set(secondText.current, { xPercent: xPercent.current });

      xPercent.current += 0.1 * direction.current;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="absolute top-[calc(100vh-350px)]">
      <div ref={slider} className="relative whitespace-nowrap">
        <p
          ref={firstText}
          className="relative m-0 pr-12 text-[200px] font-normal"
        >
          Daarel Safa Fatillah &mdash;
        </p>
        <p
          ref={secondText}
          className="absolute top-0 left-full m-0 pr-12 text-[200px] font-normal"
        >
          Daarel Safa Fatillah &mdash;
        </p>
      </div>
    </div>
  );
};

export default TextSlider;
