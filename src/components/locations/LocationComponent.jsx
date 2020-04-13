import React from 'react'

class LocationComponent extends React.Component {
  render() {
    const { location } = this.props;

    return (
      <li key={location.id}>{location.id} - {location.name}</li>
    )
  }
}

export default LocationComponent;