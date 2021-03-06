import React, { useRef } from "react"
import { Form, Button, Card } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import Firebase from "firebase";

const db = Firebase.database().ref("/events");

export default function Create() {
  const nameRef = useRef()
  const typeRef = useRef()
  const sportRef = useRef()
  const paidRef = useRef()
  const { currentUser } = useAuth()
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    const event_name = nameRef.current.value
    const event_type = typeRef.current.value
    const event_sport = sportRef.current.value
    const event_paid = paidRef.current.value
    const event_creater_uid = currentUser.uid
    const event_creater_email = currentUser.email
    const event_location_name = "Portland"
    const event_location_lat = 45.50
    const event_location_long = -122.67
    const event_date = "12/20/2020"


    const event = {
        name: event_name,
        type: event_type,
        sport: event_sport,
        paid: event_paid,
        uid: event_creater_uid,
        email: event_creater_email,
        location_name: event_location_name,
        location_lat: event_location_lat,
        location_long: event_location_long,
        date: event_date
    };

    db.push(event);

    history.push("/")
  }


  return (
    <>
      <Card className="mt-5">
        <Card.Body>
          <h2 className="text-center mb-4">Create an Event</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="type">
              <Form.Label>League or Pickup?</Form.Label>
              <Form.Control as="select" ref={typeRef} defaultValue="">
                  <option>League</option>
                  <option>Pickup</option>
              </Form.Control>
            </Form.Group>
            <Form.Group id="sport">
              <Form.Label>Sport</Form.Label>
              <Form.Control as="select" ref={sportRef} defaultValue="">
                  <option>Soccer</option>
                  <option>Basketball</option>
                  <option>Volleyball</option>
                  <option>Kickball</option>
                  <option>Baseball/Softball</option>
              </Form.Control>
            </Form.Group>
            <Form.Group id="paid">
              <Form.Label>Paid or Free?</Form.Label>
              <Form.Control as="select" ref={paidRef} defaultValue="">
                  <option>Paid</option>
                  <option>Free</option>
              </Form.Control>
            </Form.Group>
            <Button className="w-100" type="submit">
              Create Event
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  )
}