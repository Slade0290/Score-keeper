import { FAVORITES_INIT } from  '../actions/FavoritesActions'

const INITIAL_STATE = {
    favoritesPlace: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FAVORITES_INIT':
            return { favoritesPlace: action.payload}
    }
    return state;
}
