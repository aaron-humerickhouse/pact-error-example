import LocationsService from './../services/locations';

export const GET_LOCATIONS_STARTED = 'GET_LOCATIONS_STARTED';
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
export const GET_LOCATIONS_FAILURE = 'GET_LOCATIONS_FAILURE';

const getLocationsStarted = () => ({
  type: GET_LOCATIONS_STARTED,
});

const getLocationsSuccess = (locationsData) => {
  let data = {};
  locationsData.forEach(location => (data[location.id] = location));

  return {
    type: GET_LOCATIONS_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const getLocationsFailure = (errorMessage) => ({
  type: GET_LOCATIONS_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getLocations = () => {
  return (dispatch) => {
    dispatch(getLocationsStarted());
    new LocationsService()
      .getLocations()
      .then(res => {
        dispatch(getLocationsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getLocationsFailure(err.message));
      });
  };
};
