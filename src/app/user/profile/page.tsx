// Purpose: Landing page for an organizer/customer

// Functionality:
// Organizer -
// - Display EventCards for the events an organizer has created.
// - Access to "CreateEventForm"
// - Display EventCards for registered events
import React from 'react'
import Link from 'next/link'
import EventCard from '@/components/EventCard';
import { extendedTheme } from '@/app/theme';

function ProfilePage() {  
  return (
    <>
    <div className="bg-gradient-to-b from-accent to-transparent">
      <title>Event Organier</title>
      <div className="flex justify-center">
        <div className="w-80 m-0">
          <h1 className="text-center text-4xl pt-8">My Events</h1>
        </div>
      </div>
      <div className="mt-12 padding-x padding-y max-width">
        <div className="flex space-x-4">
          <h2 className="text-center text-2xl font-bold rounded-full py-2 px-4">Managed Events</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 divide-x-0">
          <div className="text-center h-60">Event Card</div>
          <div className="text-center h-60">Event Card</div>
          <div className="text-center h-60">Event Card</div>
        </div>
        <div className=""/>
      </div>
      <div className="mt-12 padding-x padding-y max-width">
        <div className="flex space-x-4">
          <h2 className="text-center text-2xl font-bold rounded-full py-2 px-4">Registered Events</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 divide-x-0">
          <div className="text-center">Event Card</div>
          <div className="text-center">Event Card</div>
          <div className="text-center">Event Card</div>
        </div>
      </div>
    </div>
    </>
    
  )
}

export default ProfilePage
