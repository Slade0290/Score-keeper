import PlaceService from "../../services/place-service"

const INITIAL_STATE = {
    PlaceService: new PlaceService()
};

export default (state = INITIAL_STATE, action) => {
    return state;
};