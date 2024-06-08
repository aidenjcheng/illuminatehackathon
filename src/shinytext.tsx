import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/magicui/animated-shiny-text";

const ShinyText = () => {
  return (
    <div className="z-10 flex items-center justify-center">
      <AnimatedGradientText>
        <span
          className={cn(
            `inline  bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
          )}
        >
          ✦
        </span>
        <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
        <span>Powered with AI</span>
      </AnimatedGradientText>
    </div>
  );
};

export default ShinyText;
