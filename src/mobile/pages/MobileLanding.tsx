import { CarouselComponent } from "@/components/CarouselComponent";
import React, { memo } from "react";

const MobileLanding = memo(() => {
  return (
    <div>
      <div>Navbar Placeholder</div>
      <div>Search Bar Placeholder</div>
      <CarouselComponent />
    </div>
  );
});

// export const MemoizedMobileLanding = React.memo(MobileLanding);
export default MobileLanding;
