// Purpose: Allow organizer to log in

// Functionality:
// - Organizer Inputs (update as needed): Email, Password
// - Welcome Modal on submission
// - Redirect to Profile on completion
'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function CreateCustomerAccountForm() {
  const router = useRouter()
  // Handles the submit event on form submit.
  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault()

    // Get data from the form.
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }

    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data)

    alert(`Hi ${data.username}`)

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
    <>
      <h1>Create Organizer Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">Username</label>
        <input type="text" id="userName" name="userName" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="email" required />
        <button type="submit">Login</button>
      </form>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  )
}
