import React, {Component} from "react"
import Firebase from "firebase"
import { Card } from "react-bootstrap"



function getEvents() {
  return Firebase.database().ref("/events").once("value", snapshot => {
  });
}

class ShowEvents extends Component {
  constructor(props){
      super(props);
      this.state = {
          events: [],
      }
    }

  componentDidMount() {
            getEvents().then(value => value.val()).then( dbEvents =>  {
              this.setState({ events: Object.values(dbEvents) });
            })        
  }

  render() {
    return (
      <div>
        {this.state.events.map((event, index) => (
            <Card key={index} className="m-3 p-3">
              <p >Event Name : {event.name}</p>
              <p >Sport : {event.sport}</p>
              <p >Type of Event : {event.type}</p>
              <p >Date : {event.date}</p>
              <p >Location : {event.location_name}</p>
            </Card>
        ))}
      </div>
    );
  }
}

export default ShowEvents;


