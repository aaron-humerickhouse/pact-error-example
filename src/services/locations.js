import BaseService from './base';

class LocationsService {
  http;

  constructor() {
    this.http = new BaseService();
  }

  getLocations = () => {
    return this.http.get(`/locations.json`, {});
  };
}

export default LocationsService;
