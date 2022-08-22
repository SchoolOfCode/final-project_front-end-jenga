import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import "./Map.css";

const mapStyles = {
  width: "39vw",
  height: "43vh",
};
let GoogleAPIKey = process.env.REACT_APP_GOOGLE;

export class MapContainer extends Component {
  render() {
    return (
      <>
        {isNaN(this.props.lat) ? null : (
          <Map
            className="googleMap"
            google={this.props.google}
            zoom={6}
            style={mapStyles}
            disableDefaultUI={true}
            initialCenter={{
              lat: this.props.lat,
              lng: this.props.lng,
            }}
          />
        )}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GoogleAPIKey,
})(MapContainer);
