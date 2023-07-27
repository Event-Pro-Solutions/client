"use client";
import DesktopLanding from "@/components/desktop/DesktopLanding";
import MainLanding from "@/components/directory/MainLanding";
import MobileLanding from "@/components/mobile/MobileLanding";
import { useViewport } from "@/hook/useViewport";

export default function Home() {
  const { width, height } = useViewport();
  return (
  
      <main className="flex min-h-screen flex-col items-center justify-between p-0 selection:bg-accent selection:text-neutral">
        {/* {width < breakpoint ? <MobileLanding /> : <DesktopLanding />} */}
        <MainLanding />
      </main>
   
  );
}
