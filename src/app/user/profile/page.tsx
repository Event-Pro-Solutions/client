// Purpose: Landing page for an organizer/customer

// Functionality:
// Organizer -
// - Display EventCards for the events an organizer has created.
// - Access to "CreateEventForm"
// Customer -
// - Display EventCards for registered events
"use client";
import React from "react";
import Link from "next/link";
import { useViewport } from "@/hook/useViewport";

function ProfilePage() {
  const { width } = useViewport();
  console.log(width);
  return (
    <>
      <h1>ProfilePage</h1>

      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
}

export default ProfilePage;
