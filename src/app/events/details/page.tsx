// Purpose: List out all event details

// Functionality:
// - Populate the following information (update as needed): Name of Event, In person vs virtual, Start Date, End Date, Time, Tags, Image, Price, Description
// - Provide registration option -> onClick show registration confirmation (RegistrationComplete popup Module)
// Updated registration based on a users registration status
"use client";
import React from "react";
import { useViewport } from "@/hook/useViewport";

function EventDetailPage() {
  const { width } = useViewport();
  console.log(width);
  return <div>EventDetailPage</div>;
}

export default EventDetailPage;
