import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import googleMaps from '@iconify/icons-mdi/map-marker'
import GetEvents from "./GetEvents"

console.log(GetEvents())

function Marker() {
    return(
    <div className="pin">
      <Icon icon={googleMaps} className="pin-icon" height="4em" color="#e57373" />
      {/* <p className="pin-text">Hello</p> */}
    </div>
    )
  }


class SimpleMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            markers: [],
        }
      }
    
      componentDidMount(){

        this.setState({
          markers: [{lat: 45.5051, lng: -122.6750, id: 1 },{lat: 45.5352, lng: -122.6842, id: 2 },{lat: 45.5940, lng: -122.6955, id: 3}],
        });
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