// Purpose: Form for organizers to edit/delete an event

// Functionality:
// - Editable Inputs (update as needed): Name of Event, In person vs virtual (dropdown sending true for virtual, false for none), Start Date, End Date, Time, Tags, Price, Description, Image
// - Option to delete event
// - EventUpdated Modal on submission
// - Redirect to Profile on completion
"use client";
import React from "react";
import { useViewport } from "@/hook/useViewport";

function EditEventForm() {
  const { width } = useViewport();
  console.log(width);
  return <div>EditEventForm</div>;
}

export default EditEventForm;
