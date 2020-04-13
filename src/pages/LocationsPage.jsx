import React from 'react'

import LocationsComponent from "../components/locations/LocationsComponent";

class LocationsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Locations</h1>
        <LocationsComponent />
      </div>
    )
  }
}

export default LocationsPage;