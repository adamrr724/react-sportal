import React, { useRef} from "react"
import Firebase from "firebase"

const db = Firebase.database().ref("/events");
var events = [];

export default async function GetEvents() {

    db.once("value", snapshot => {
    events = JSON.stringify(snapshot.val())
    console.log(events)
    }, (error) => {
        if (error) {
          // The write failed...
        } else {
          return events
        }
    });

}

