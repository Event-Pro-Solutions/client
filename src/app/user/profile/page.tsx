// Purpose: Landing page for an organizer/customer

// Functionality:
// Organizer -
// - Display EventCards for the events an organizer has created.
// - Access to "CreateEventForm"
// - Display EventCards for registered events
import React from 'react'
import Link from 'next/link'
import EventCard, { EventCardsProps } from '@/components/EventCard';
import { extendedTheme } from '@/app/theme';
import { sportEvents } from '@/utils/data';

function ProfilePage() { 
  const managedEventSize = sportEvents.length;
  const registeredEventSize = 0;

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
        <div className="flex flex-wrap justify-center">
          <div className="grid">
          {managedEventSize > 0 ?
            <EventCard events={sportEvents} /> :
            <div> No Events </div>
          }
          </div>
        </div>
        <div className=""/>
      </div>
      <div className="mt-12 padding-x padding-y max-width">
        <div className="flex space-x-4">
          <h2 className="text-center text-2xl font-bold rounded-full py-2 px-4">Registered Events</h2>
        </div>
        <div className="flex justify-center">
          {registeredEventSize > 0 ? 
            <EventCard events={sportEvents} /> :
            <div className="text-2xl text-center"> No Registered Events </div>}
        </div>
      </div>
    </div>
    </>
    
  )
}

export default ProfilePage
