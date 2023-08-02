"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import baseball from "../../../utils/images/baseball.webp";

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
  const InitialState = {
    name: "",
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
  };

  // temp
  const EVENTS_URL =
    "https://api-vni1.onrender.com/events/64c82df01662e48507781c97 ";

  const [event, setEvent] = useState<EventModel>(InitialState);
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [eventRegister, setEventRegister] = useState<boolean>(false);

  useEffect(() => {
    const getEvent = async () => {
      const response = await fetch(EVENTS_URL);
      const json = await response.json();

      setEvent(json.event);

      const startDate = new Date(json.event.startDatetime);
      const endDate = new Date(json.event.endDatetime);
      const formattedStartDateTime = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }).format(startDate);

      setStart(formattedStartDateTime);

      const startDatePortion = startDate.toISOString().slice(0, 10);
      const endDatePortion = endDate.toISOString().slice(0, 10);

      if (startDatePortion !== endDatePortion) {
        let formattedEndDateTime = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(endDate);
        setEnd(formattedEndDateTime);
      } else {
        let formattedEndDateTime = new Intl.DateTimeFormat("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(endDate);

        setEnd(formattedEndDateTime);
      }

      return response;
    };

    getEvent();

    // .catch(console.log(error))
  }, []);

  const register = () => {
    if (eventRegister) {
      setEventRegister(false);
    } else {
      setEventRegister(true);
      alert("Registered!");
    }
  };

  return (
    <div className="overflow-hidden mt-24 h-full min-h-screen">
      <div className=" flex flex-row my-8 mx-4 xl:mx-32 flex-wrap">
        <div className="m-auto mx-4 basis-full">
          <h1 className="my-4  text-3xl xs:text-5xl sm:text-6xl md:text-8xl text-center">
            {event.name}
          </h1>

          <h1 className=" my-8 w-full text-lg xs:text-1xl sm:text-2xl md:text-3xl lg:text-4xl text-center ">
            {start} to {end}
          </h1>
        </div>
        <Image
          className=" basis-full lg:basis-1/2 h-2/5 w-auto lg:h-auto lg:w-1/4 m-auto "
          alt="event image"
          src={baseball}
        ></Image>
        <div className="px-2 py-2 flex flex-col basis-full lg:basis-1/2 ">
          <div className="sm:px-8 lg:h-1/2 text-lg sm:text-2xl text-left flex flex-col py-4">
            <h1 className="py-2">Location: {event.location}</h1>
            <h1 className=" py-2">Cost: ${event.price}</h1>
            <h1 className=" py-2">Hosted By: {event.creatorId}</h1>
            <h1 className=" py-2">{event.description}</h1>
            {eventRegister ? (
              <button
                className="bg-dark hover:bg-secondary text-white font-bold py-4 px-4 my-4 rounded focus:outline-none focus:shadow-outline m-auto text-1xl sm:text-4xl"
                type="submit"
                onClick={register}
              >
                Registered
              </button>
            ) : (
              <button
                className="bg-dark hover:bg-secondary text-white font-bold py-4 px-4 my-4 rounded focus:outline-none focus:shadow-outline m-auto text-1xl sm:text-4xl"
                type="submit"
                onClick={register}
              >
                Register Today!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetailPage;
