// Purpose: Form for organizers to create an event

// Functionality:
// - Organizer Inputs (update as needed): Name of Event, In person vs virtual (dropdown sending true for virtual, false for in person), location, Start Date/time, End Date/time, Event Tags, Price, Description (optional), Image (optional)
// - EventCreated Modal on submission
// - Redirect to Profile on completion
"use client";
import React from "react";
import { useViewport } from "@/hook/useViewport";

function CreateEventForm() {
  const { width } = useViewport();
  console.log(width);
  return <div>CreateEventForm</div>;
}

export default CreateEventForm;
