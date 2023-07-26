'use client'
// Purpose: Navigation header used throughout app

// Functionality:
// - App Logo / Event Name

// - Menu Options -> Match available event tags
// Help -> Pop up modal showing team email

// No User Signed In:
// - Create Account, Login

// User Signed In:
// *Starting with the assumption all users are organizers and can create events
// - Profile, SignOut, CreateEvent
import React, { useEffect, useState, useRef } from 'react'
import textLogoLight from "../utils/images/textLogoLight.png"
import Image from 'next/image'


const Navigation = () => {
  const [profileMenu, setProfileMenu] = useState(false)
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const [mobileMenu, setMobileMenu] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  // Placehoder for user - Update image when completed
  const [user, setUser] = useState(true)

  useEffect(() => {
    setMobileMenu(false)
    setProfileMenu(false)
  }, [])

const showProfileMenu = () => {
  if(!profileMenu){
    setProfileMenu(true)
    setMobileMenu(false)
  } else {
    setProfileMenu(false)
  }
}

const showMobileMenu = () => {
  if(!mobileMenu){
    setMobileMenu(true)
    setProfileMenu(false)
  } else {
    setMobileMenu(false)
  }
}

useEffect(() => {
  function handleOutsideClick(event: MouseEvent) {

      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setProfileMenu(false);
      }
    }

  document.addEventListener('click', handleOutsideClick);

  return () => {
    document.removeEventListener('click', handleOutsideClick);
  };
}, [profileMenu]);

useEffect(() => {
  function handleOutsideClick(event: MouseEvent) {

      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenu(false);
      }
    }

  document.addEventListener('click', handleOutsideClick);

  return () => {
    document.removeEventListener('click', handleOutsideClick);
  };
}, [mobileMenu]);


  return (
    <nav className="bg-dark">
      <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={showMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
              <svg
                className="block h-6 w-6"
                display="hidden"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
              <svg
                className="hidden h-6 w-6"
                display="hidden"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"> */}
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start ">
            <a className="flex flex-shrink-0 items-center"  href="/">
              <Image
                className="h-14 w-auto"
                src={textLogoLight}
                alt="Your Company"
              ></Image>
            </a>
            <div className="hidden md:ml-6 md:block ">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <a
                  href="#"
                  className="text-white mt-4 px-3 py-2 text-sm font-medium  border-b-4 border-transparent hover:border-secondary"
                  aria-current="page"
                >
                  Concerts
                </a>
                <a
                  href="#"
                  className="text-white   mt-4 px-3 py-2 text-sm font-medium  border-b-4 border-transparent hover:border-secondary"
                >
                  Sports
                </a>
                <a
                  href="#"
                  className="text-white   mt-4 px-3 py-2 text-sm font-medium  border-b-4 border-transparent hover:border-secondary"
                >
                  Family
                </a>
                <a
                  href="#"
                  className="text-white   mt-4 px-3 py-2 text-sm font-medium  border-b-4 border-transparent hover:border-secondary"
                >
                  More
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


            {/* <!-- Profile dropdown --> */}
            <div   className="relative ml-3">
              {user ? (<div >
                <button
               onClick={showProfileMenu}
                  type="button"
                  className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  ></img>
                </button>
              </div>) : (
                 <div className="flex space-x-4 hidden md:ml-6 md:block">
                 {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                 <a
                   href="#"
                   className="bg-primary text-white hover:bg-dark rounded-md px-3 py-2 text-sm font-medium"
                   aria-current="page"
                 >
                   Sign In
                 </a>
                 <a
                   href="#"
                   className="bg-primary text-white hover:bg-dark rounded-md px-3 py-2 text-sm font-medium"
                 >
                   Create Account
                 </a>

               </div>
              )}
              
              {/* 
          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          --> */}
         
              <div ref={profileMenuRef}
               className={profileMenu ? ("absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-primary py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ") : ("absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-primary py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden")}
               
                
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
              >
                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                <a
                  href="/user/profile"
                  className="block px-4 py-2 text-md text-white rounded-md hover:bg-dark"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-0"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-dm text-white rounded-md hover:bg-dark"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="md:hidden" id="mobile-menu" ref={mobileMenuRef}>
        <div className= {mobileMenu ? ("space-y-1 px-2 pb-3 pt-2") : ("space-y-1 px-2 pb-3 pt-2 hidden")}>
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a
            href="#"
            className="text-white hover:bg-primary block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Sign In
          </a>
          <a
            href="#"
            className="text-white hover:bg-primary block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Create Account
          </a>
          <a
            href="#"
            className="text-white hover:bg-primary block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Events
          </a>
          <a
            href="#"
            className="text-white hover:bg-primary block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Concerts
          </a>
          <a
            href="#"
            className="text-white hover:bg-primary  block rounded-md px-3 py-2 text-base font-medium"
          >
            Sports
          </a>
          <a
            href="#"
            className="text-white hover:bg-primary  block rounded-md px-3 py-2 text-base font-medium"
          >
            Family
          </a>
          <a
            href="#"
            className="text-white hover:bg-primary  block rounded-md px-3 py-2 text-base font-medium"
          >
            More
          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navigation
