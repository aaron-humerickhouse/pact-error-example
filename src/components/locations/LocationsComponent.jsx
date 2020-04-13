import React from 'react'
import { connect } from 'react-redux'

import LocationComponent from './LocationComponent'
import {getLocations} from "../../actions/locations";

class LocationsComponent extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getLocations());
  }

  render() {
    const { locations } = this.props;

    const locationItems = (Object.keys(locations)).map((key) => {
       return <LocationComponent location={locations[key]}/>
      }
    );

    return (
      <ul>
        {locationItems}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  const { locations } = state;

  return {
    locations: locations?.data || {},
  }
}

export default connect(mapStateToProps)(LocationsComponent);