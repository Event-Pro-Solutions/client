"use client"
import axios from 'axios'

// {"_id":"64c82df01662e48507781c97","name":"Event 2","is_virtual":false,"location":"New York","startDatetime":"2023-08-02T18:00:00.000Z","endDatetime":"2023-08-02T20:00:00.000Z","price":20,"tags":["entertainment"],"creatorId":"60d5ecb8b48738759f80f842","managedBy":["60d5ecb8b48738759f80f843"],"imgUrl":"http://example.com/event2.png","description":"This is a description for Event 2"}


  const EVENTS_URL = process.env.REACT_APP_EVENTS_URL

  // temp
  const eventId = "/64c82df01662e48507781c97"


// Get event
const getEvent = async (id: string) => {

  const response = await axios.get(EVENTS_URL + id)
  return response.data
}






const eventService = {

  getEvent,

}
export default eventService
