import { DETAIL_INIT } from  '../actions/PlaceDetailActions'

const INITIAL_STATE = {
    placeDetail: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DETAIL_INIT':
            return { placeDetail: action.payload}
    }
    return state;
}
