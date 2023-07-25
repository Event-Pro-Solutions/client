// Purpose: Landing page for an organizer/customer

// Functionality:
// Organizer -
// - Display EventCards for the events an organizer has created.
// - Access to "CreateEventForm"
// Customer -
// - Display EventCards for registered events
import React from "react";
import Link from "next/link";
import { ViewportProvider } from "@/hook/useViewport";

function ProfilePage() {
  return (
    <ViewportProvider>
      <>
        <h1>ProfilePage</h1>

        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </>
    </ViewportProvider>
  );
}

export default ProfilePage;
