// Purpose: Allow organizer to log in

// Functionality:
// - Organizer Inputs (update as needed): Email, Password
// - Welcome Modal on submission
// - Redirect to Profile on completion
import React from 'react'
import Link from 'next/link'

function LoginForm() {
  return (
    <>
      <h1>Login Page</h1>
      <form action="/send-data-here" method="post">
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <button type="submit">Submit</button>
      </form>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  )
}

export default LoginForm
