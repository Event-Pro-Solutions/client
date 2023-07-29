// Purpose: Form for organizers to create an event

// Functionality:
// - Organizer Inputs (update as needed): Name of Event, In person vs virtual (dropdown sending true for virtual, false for in person), location, Start Date/time, End Date/time, Event Tags, Price, Description (optional), Image (optional)
// - EventCreated Modal on submission
// - Redirect to Profile on completion
'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ticket from '../../../utils/images/ticket.jpg'

function CreateEventForm() {
  const router = useRouter()
  // Handles the submit event on form submit.
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      username: event.target.username.value,
      password: event.target.password.value,
    }

    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data)

    alert(`Hi ${data.firstName}`)

    router.push('/user/profile')

    // // API endpoint where we send form data.
    // const endpoint = '/api/createOrganizer'

    // // Form the request for sending data to the server.
    // const options = {
    //   // The method is POST because we are sending data.
    //   method: 'POST',
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: JSONdata,
    // }

    // // Send the form data to our forms API on Vercel and get a response.
    // const response = await fetch(endpoint, options)

    // // Get the response data from server as JSON.
    // // If server returns the name submitted, that means the form works.
    // const result = await response.json()
    // alert(`Is this your full name: ${result.data}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
    <div className="bg-white max-w-md w-full space-y-8 text-dark border-solid border-2 border-primary">
      <div>
        <Image
          className="mx-auto h-12 w-auto mt-4"
          src={ticket}
          alt="ticket logo"
        ></Image>

        <h2 className="mt-6 mx-4 text-center text-3xl font-extrabold">
          Create a new Event
        </h2>
      </div>
      <div className="max-w-md w-full space-y-8">
        <form
          className="shadow-md rounded px-8 pt-6 pb-8"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-dark text-sm font-bold mb-2"
              htmlFor="eventName"
            >
              Event Name
            </label>
            <input
              className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
              placeholder="Event Name"
              type="text"
              id="eventName"
              name="eventName"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-dark text-sm font-bold mb-2"
              htmlFor="virtual"
            >
              Virtual or In Person
            </label>
            <input
              className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
              placeholder="Virtual or In Person"
              type="text"
              name="virtual"
              required
              id="virtual"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-dark text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
              placeholder="Location"
              name="location"
              required
              type="text"
              id="location"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-dark text-sm font-bold mb-2"
              htmlFor="startDateTime"
            >
              Start Date and Time
            </label>
            <input
              className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
              placeholder="Start Date and Time"
              type="text"
              id="startDateTime"
              name="startDateTime"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-dark text-sm font-bold mb-2"
              htmlFor="endDateTime"
            >
              End Date and Time
            </label>
            <input
              className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
              placeholder="End Date and Time"
              type="text"
              id="endDateTime"
              name="endDateTime"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-dark text-sm font-bold mb-2"
              htmlFor="price"
            >
              Event Price
            </label>
            <input
              className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
              placeholder="Event Price"
              type="text"
              id="price"
              name="price"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-dark text-sm font-bold mb-2"
              htmlFor="eventType"
            >
              Event Type
            </label>
            <input
              className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
              placeholder="Event Type"
              type="text"
              id="eventType"
              name="eventType"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-dark text-sm font-bold mb-2"
              htmlFor="eventImage"
            >
              Event Image
            </label>
            <input
              className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
              placeholder="Event Image"
              type="text"
              id="eventImage"
              name="eventImage"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-dark text-sm font-bold mb-2"
              htmlFor="description"
            >
              Event Description
            </label>
            <input
              className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
              placeholder="Event Description"
              type="text"
              id="description"
              name="description"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-dark hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto"
              type="submit"
            >
              Create Event
            </button>
          </div>
          <div>
            <Link href="/">← Back to home</Link>
          </div>
        </form>
      </div>
    </div>
  </div>
)
}

export default CreateEventForm
