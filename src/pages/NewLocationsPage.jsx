import React from 'react'
import { connect } from 'react-redux'

import LocationFormComponent from "../components/locations/LocationFormComponent";

class NewLocationsPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Add New Location</h1>
        <LocationFormComponent />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(NewLocationsPage);