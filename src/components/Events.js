import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 45.5051,
      lng: -122.6750
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%', display: "block" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;