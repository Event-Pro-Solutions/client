"use client";
import DesktopLanding from "@/components/desktop/DesktopLanding";
import MainLanding from "@/components/directory/MainLanding";
import MobileLanding from "@/components/mobile/MobileLanding";
import { ViewportProvider } from "@/hook/useViewport";

export default function Home() {
  return (
    <ViewportProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-0 selection:bg-accent selection:text-neutral">
        {/* {width < breakpoint ? <MobileLanding /> : <DesktopLanding />} */}
        <MainLanding />
      </main>
    </ViewportProvider>
  );
}
