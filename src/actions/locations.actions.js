import * as TYPES from "./locations.actions";
import LocationDataService from "../services/location.service";

function fetchLocations() {
  return (dispatch) => {
    dispatch({
      type: TYPES.FETCH_LOCATIONS_REQUEST,
    });
    LocationDataService.getAll();
  };
}
