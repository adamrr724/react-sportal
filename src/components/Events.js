import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import googleMaps from '@iconify/icons-mdi/map-marker'
import Firebase from "firebase"
import "../styles/css/styles.css"

function Marker({name,type,sport}) {
    return(
    <div>
        <Icon icon={googleMaps} className="pin-icon" height="4em" color="#e57373" />
      <div className="pin-card">
        <p className="pin-text">Name: {name}</p>
        <p className="pin-text">Event Type: {type}</p>
        <p className="pin-text">Sport: {sport}</p>
      </div>
    </div>
    )
  }

function getEvents() {
    return Firebase.database().ref("/events").once("value", snapshot => {
    });
} 


class SimpleMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            markers: [],
            events: [],
        }
      }
    
      componentDidMount(){
        getEvents().then(value => value.val()).then( dbEvents =>  {
            var markerArray = []
            this.setState({ events: Object.values(dbEvents) });
            this.state.events.map((event, index) => (
                markerArray.push({lat: event.location_lat, lng: event.location_long, id: index, name: event.name, type: event.type, sport: event.sport})
            ))
            this.setState({
                markers: markerArray
              });
          })  
      }
    
      render() {
        return (
          <div style={{ height: '100vh', width: '100%', display: "block" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
                {this.state.markers.map((marker, i) =>{
                  return(
                    <Marker 
                      lat={marker.lat}
                      lng={marker.lng}
                      key={marker.id}
                      name={marker.name}
                      sport={marker.sport}
                      type={marker.type}
                    />
    
                  )
                })}      
          </GoogleMapReact>
          </div>
        );
      }
    }
    SimpleMap.defaultProps = {
      center: {lat: 45.5051, lng: -122.6750},
      zoom: 11
    };

 
export default SimpleMap;