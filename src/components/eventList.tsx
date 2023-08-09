import { useEffect, useState } from "react";
import { useEvents } from "@/hooks";

function EventList({ category }: any) {
  const [events, setEvents] = useState([]);

  const { data: allEvents, isError, isLoading } = useEvents();

  useEffect(() => {
    console.log(allEvents);
  }, [category]);

  return (
    <div>
      <h2>Events for {category}</h2>
      {/* Display the fetched events here */}
    </div>
  );
}

export default EventList;
