'use client'
// Purpose: List out all event details

// Functionality:
// - Populate the following information (update as needed): Name of Event, In person vs virtual, Start Date, End Date, Time, Tags, Image, Price, Description
// - Provide registration option -> onClick show registration confirmation (RegistrationComplete popup Module)
// Updated registration based on a users registration status

import React , {useEffect, useState} from 'react'
import Image from 'next/image'
import baseball from "../../../utils/images/baseball.webp"



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
    const [start, setStart] = useState<string>("")
    const [end, setEnd] = useState<string>("")


  

  useEffect(() => {
    
    const getEvent = async() => {

        const response = await fetch(EVENTS_URL)
        const json = await response.json();
        
        setEvent(json.event)

        const startDate = new Date(json.event.startDatetime)
        const endDate = new Date(json.event.endDatetime)
        const formattedStartDateTime = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        }).format(startDate);
        
        setStart(formattedStartDateTime)

        const startDatePortion = startDate.toISOString().slice(0, 10);
        const endDatePortion = endDate.toISOString().slice(0, 10);
        
        if(startDatePortion !== endDatePortion){
          let formattedEndDateTime = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }).format(endDate);
          setEnd(formattedEndDateTime)
        } else {
          let formattedEndDateTime = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          }).format(endDate);

          setEnd(formattedEndDateTime)
        }

       


        


        console.log(endDate)
  
        return response
      }

    getEvent()

    // .catch(console.log(error))

  }, [])



  return (

<div className="mt-24 h-full min-h-screen">

    <div className="m-auto mx-4">
     <h1 className = "my-4 text-2xl sm:text-6xl lg:text-8xl  text-center">{event.name}</h1>

      <h1 className = " w-full text-lg sm:text-lg lg:text-4xl text-center " >{start} to {end}</h1>
      
      </div>
   
    
    <div className=" flex flex-row my-8 mx-4" >
      <Image  className=" basis-1/2 h-auto w-2/5 m-auto " alt="event image" src={baseball} ></Image>
      <div className="px-2 py-2 flex flex-col basis-1/2 ">
      <div className = "h-1/2 text-2xl text-center flex flex-col items-center">
      <h1  className = "h-1/3" >Location: {event.location}</h1>
     <h1  className = "h-1/3" >Cost: ${event.price}</h1>
      <h1  className = "h-1/3"  >Hosted By: {event.creatorId}</h1>

        </div>
        <div  className="py-4 px-4 text-center text-2xl h-1/3">
      <h1 >{event.description}</h1>

        </div>

      <button  className="bg-dark hover:bg-secondary text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline m-auto text-4xl"
              type="submit">Registration</button>
      </div>

    </div>
</div>


    /* {"_id":"64c82df01662e48507781c97","name":"Event 2","is_virtual":false,"location":"New York","startDatetime":"2023-08-02T18:00:00.000Z","endDatetime":"2023-08-02T20:00:00.000Z","price":20,"tags":["entertainment"],"creatorId":"60d5ecb8b48738759f80f842","managedBy":["60d5ecb8b48738759f80f843"],"imgUrl":"http://example.com/event2.png","description":"This is a description for Event 2"} */


 
  )
}

export default EventDetailPage
