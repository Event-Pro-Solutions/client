// Purpose: Form for organizers to create an event

// Functionality:
// - Organizer Inputs (update as needed): Name of Event, In person vs virtual (dropdown sending true for virtual, false for in person), location, Start Date/time, End Date/time, Event Tags, Price, Description (optional), Image (optional)
// - EventCreated Modal on submission
// - Redirect to Profile on completion
import { ViewportProvider } from "@/hook/useViewport";
import React from "react";

function CreateEventForm() {
  return (
    <ViewportProvider>
      <div>CreateEventForm</div>;
    </ViewportProvider>
  );
}

export default CreateEventForm;
