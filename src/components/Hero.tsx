import type { FC } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import TextSlider from "./TextSlider";

const Hero: FC = () => {
  return (
    <main className="relative flex h-[100vh] overflow-hidden">
      <div className="flex-evenly absolute top-44 left-0 h-24 w-56 flex-row rounded-r-full bg-[var(--color-off-white)]">
        <p className="ml-2 w-24 text-xl font-semibold text-[var(--color-dark-gray)]">
          Based in Jakarta
        </p>
        <div className="h-24 w-24">
          <DotLottieReact
            src="https://lottie.host/48fb2266-3f6f-4dfd-97be-a53fd06b1e43/5AKQXbnQQa.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <div className="absolute top-44 right-36">
        <p className="text-3xl">Front-End Developer</p>
        <p className="text-3xl">UI/UX Enthusiast</p>
      </div>
      <TextSlider />
    </main>
  );
};

export default Hero;
