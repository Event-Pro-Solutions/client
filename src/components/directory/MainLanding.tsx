"use client";
import { memo } from "react";
import { useViewport } from "@/hook/useViewport";
import MobileLanding from "../mobile/MobileLanding";
import DesktopLanding from "../desktop/DesktopLanding";

const MainLanding = memo(() => {
  const { width } = useViewport();
  const breakpoint = 600;

  return width < breakpoint ? <MobileLanding /> : <DesktopLanding />;
});

export default MainLanding;
