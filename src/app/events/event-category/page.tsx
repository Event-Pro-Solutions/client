// Purpose: Individual page for all events based on a specific tag

// Functionality:
// - Populated with event cards through a event/${eventTag} route
import React from "react";
import { useViewport } from "@/hook/useViewport";

function CategoryEventPage() {
  const { width } = useViewport();

  return <div>CategoryEventPage</div>;
}

export default CategoryEventPage;
