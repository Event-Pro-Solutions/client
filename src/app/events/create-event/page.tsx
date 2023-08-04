// Purpose: Form for organizers to create an event

// Functionality:
// - Organizer Inputs (update as needed): Name of Event, In person vs virtual (dropdown sending true for virtual, false for in person), location, Start Date/time, End Date/time, Event Tags, Price, Description (optional), Image (optional)
// - EventCreated Modal on submission
// - Redirect to Profile on completion
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ticketLogoLight from "@/assets/images/ticketLogoLight.png";
import DateTimePicker from "@/components/DateTimePicker";
import CategoryDropdown from "@/components/CategoryDropdown";

function CreateEventForm() {
  const router = useRouter();
  // Handles the submit event on form submit.
  const [virtual, setVirtual] = useState(true);
  const [price, setPrice] = useState(
    (0.0).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    })
  );

  const formatNumber = (n: string) => {
    // format number 1000000 to 1,234,567
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatCurrency = (inputValue: string, blur?: string) => {
    // appends $ to value, validates decimal side
    // and puts cursor back in the right position.

    // don't validate empty input
    if (inputValue === "") {
      return inputValue;
    }

    // check for decimal
    if (inputValue.indexOf(".") >= 0) {
      // get position of the first decimal
      // this prevents multiple decimals from
      // being entered
      const decimal_pos = inputValue.indexOf(".");

      // split number by the decimal point
      let left_side = inputValue.substring(0, decimal_pos);
      let right_side = inputValue.substring(decimal_pos);

      // add commas to the left side of the number
      left_side = formatNumber(left_side);

      // validate the right side
      right_side = formatNumber(right_side);

      // On blur, make sure 2 numbers after the decimal
      if (blur === "blur") {
        right_side += "00";
      }

      // Limit the decimal to only 2 digits
      right_side = right_side.substring(0, 2);

      // join number by "."
      return "$" + left_side + "." + right_side;
    } else {
      // no decimal entered
      // add commas to the number
      // remove all non-digits

      const formattedValue = formatNumber(inputValue);
      if (formattedValue == "") {
        return "$" + formattedValue + (blur === "blur" ? "0.00" : "");
      } else {
        return "$" + formattedValue + (blur === "blur" ? ".00" : "");
      }
    }
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setPrice(formatCurrency(inputValue));
  };

  const handleBlur = () => {
    setPrice((prevValue) => formatCurrency(prevValue, "blur"));
  };

  function displayText(choice: string) {
    if (choice == "yes") {
      setVirtual(true);
    } else if (choice == "no") {
      setVirtual(false);
    }
  }

  const handleSubmit = async (event: any) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {};

    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(data)

    router.push("/user/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="bg-white max-w-lg w-full space-y-8 text-dark border-solid border-2 border-primary">
        <div>
          <Image
            className="mx-auto h-12 w-auto mt-4"
            src={ticketLogoLight}
            alt="ticket logo"
          ></Image>

          <h2 className="mt-6 mx-4 text-center text-3xl font-extrabold">
            Create a new Event
          </h2>
        </div>
        <div className="max-w-lg w-full space-y-8">
          <form
            className="rounded px-4 sm:px-8 pt-6 pb-8"
            onSubmit={handleSubmit}
          >
            <div className="mb-4 relative px-2">
              <label
                className="block text-dark text-sm font-bold mb-2  "
                htmlFor="eventName"
              >
                Event Name
              </label>
              <input
                className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
                type="text"
                id="eventName"
                name="eventName"
                required
                minLength={2}
              />
            </div>

            {/* Date and Time picker */}
            <div>
              <label
                className="block text-dark text-sm font-bold mb-2 px-2"
                htmlFor="startDateTime"
              >
                Date and Time
              </label>
            </div>
            <div className="display: inline-block ">
              <div className="display: inline-block px-2 w-full sm:w-52 ">
                <label
                  className="display: block text-dark text-sm font-bold mb-2  text-center"
                  htmlFor="startDateTime"
                >
                  Start
                </label>

                <DateTimePicker />
              </div>

              <div className="display: inline-block px-2 w-full sm:w-52 sm:ml-3">
                <label
                  className=" display: block text-dark text-sm font-bold mb-2  text-center "
                  htmlFor="endDateTime"
                >
                  End
                </label>
                <DateTimePicker />
              </div>
            </div>

            <div className="display: inline-block w-full">
              <div className=" display: inline-block px-2 w-full sm:w-52">
                <label
                  className=" display: block text-dark text-sm font-bold mb-2 md:text-center w-full  text-left"
                  htmlFor="price"
                >
                  Event Price
                </label>

                <input
                  className=" shadow appearance-none border rounded border-accent mb-4 p-2 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent  w-full "
                  type="text"
                  name="price"
                  id="price"
                  pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$"
                  value={price}
                  data-type="currency"
                  placeholder="$0.00"
                  onChange={handlePriceChange}
                  onBlur={handleBlur}
                  required
                />
              </div>
              <div className="px-2 display: inline-block pr-2  mb-4 w-full sm:w-52 sm:ml-3 md:w-1/2">
                <label
                  className="display: block text-dark text-sm font-bold mb-2 text-left md:text-center w-full"
                  htmlFor="eventType"
                >
                  Event Type
                </label>
                <CategoryDropdown />
              </div>
              <div className="md:display: inline-block display: block pb-4 w-full">
                <label
                  className="display: block text-dark text-sm font-bold mb-2 text-center "
                  htmlFor="virtual"
                >
                  Virtual Event?
                </label>
                <div className="flex justify-center">
                  <div
                    onClick={() => displayText("yes")}
                    className={
                      virtual
                        ? "display: inline-block shadow appearance-none border rounded border-accent  w-1/3 mx-2   text-center bg-primary cursor-pointer"
                        : "display: inline-block shadow appearance-none border rounded border-accent  w-1/3 mx-2   text-center cursor-pointer"
                    }
                    placeholder="Virtual or In Person"
                    // type="text"
                    // name="virtual"
                    // required
                    // id="virtual"
                  >
                    Yes
                  </div>
                  <div
                    onClick={() => displayText("no")}
                    className={
                      virtual
                        ? "display: inline-block shadow appearance-none border rounded border-accent  w-1/3 mx-2  md:ml-2 text-center cursor-pointer "
                        : "display: inline-block shadow appearance-none border rounded border-accent  w-1/3 mx-2  text-center bg-primary cursor-pointer"
                    }
                    placeholder="Virtual or In Person"
                    // type="text"
                    // name="virtual"
                    // required
                    // id="virtual"
                  >
                    No
                  </div>
                </div>
              </div>

              {!virtual ? (
                <div className="mb-4 px-2">
                  <label
                    className="block text-dark text-sm font-bold mb-2"
                    htmlFor="location"
                  >
                    Location
                  </label>
                  <input
                    className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
                    name="location"
                    required
                    type="text"
                    id="location"
                  />
                </div>
              ) : (
                <></>
              )}
            </div>

            <div className="mb-4 px-2">
              <label
                className="block text-dark text-sm font-bold mb-2 "
                htmlFor="description"
              >
                Event Details
              </label>
              <textarea
                className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
                id="description"
                name="description"
              />
            </div>

            <div className="mb-4 px-2">
              <label
                className="block text-dark text-sm font-bold mb-2 "
                htmlFor="eventImage"
              >
                Event Image
              </label>
              <input
                className="shadow appearance-none border rounded border-accent w-full py-2 px-3 text-dark leading-tight focus:outline-secondary focus:shadow-outline placeholder-accent"
                placeholder="Image URL"
                type="text"
                id="eventImage"
                name="eventImage"
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
  );
}

export default CreateEventForm;
