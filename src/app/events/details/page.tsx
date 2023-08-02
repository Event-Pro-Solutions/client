'use client'
// Purpose: List out all event details

// Functionality:
// - Populate the following information (update as needed): Name of Event, In person vs virtual, Start Date, End Date, Time, Tags, Image, Price, Description
// - Provide registration option -> onClick show registration confirmation (RegistrationComplete popup Module)
// Updated registration based on a users registration status

import React , {useEffect, useState} from 'react'
import axios from 'axios'


// import eventService from '@/app/features/EventService'

// {"_id":"64c82df01662e48507781c97","name":"Event 2","is_virtual":false,"location":"New York","startDatetime":"2023-08-02T18:00:00.000Z","endDatetime":"2023-08-02T20:00:00.000Z","price":20,"tags":["entertainment"],"creatorId":"60d5ecb8b48738759f80f842","managedBy":["60d5ecb8b48738759f80f843"],"imgUrl":"http://example.com/event2.png","description":"This is a description for Event 2"}



function EventDetailPage() {

  interface EventModel {
    name: string;
    is_virtual: boolean;
    location: string;
    startDatetime: string;
    endDatetime: string;
    price: number;
    tags: string[];
    creatorId: string;
    managedBy: string;
    imgUrl: string;
    description: string;
  }
  const  InitialState = {
    name: '',
    is_virtual: true,
    location: "",
    startDatetime: "",
    endDatetime: "",
    price: 0,
    tags: [],
    creatorId: "",
    managedBy: "",
    imgUrl: "",
    description: "",
  }

  // temp
    const EVENTS_URL = "https://api-vni1.onrender.com/events/64c82df01662e48507781c97 "

  
    const [event, setEvent] = useState<EventModel>(InitialState)


  

  useEffect(() => {
    
    const getEvent = async() => {

        const response = await fetch(EVENTS_URL)
        const json = await response.json();
        
        setEvent(json.event)
  
        return response
      }


    getEvent()

    // .catch(console.log(error))

  }, [])



  return (
  <div className='pt-52'>

    <h1>{event.name}</h1>
    <h2>Hosted By: </h2>
    <h3>Location</h3>
    <h3>Dates and Times</h3>
    {/* <h3 onClick = {getData}>Cost</h3> */}

 
  </div>
  )
}

export default EventDetailPage
