import Image from "next/image";
import Hero from "@/Hero/page";
import SplashCursor from "../../Animations/SplashCursor/SplashCursor";
import TargetCursor from "../../Animations/TargetCursor/TargetCursor";
import Dither from "../../Backgrounds/Dither/Dither";

export default function Home() {
  
  return (
    <div>
      
      {/* <TargetCursor /> */}
      {/* <SplashCursor /> */}
      <Hero />
    </div>
  );
}
