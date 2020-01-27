import { createStore, combineReducers, applyMiddleware } from "redux";
import ServicesReducer from "./reducers/ServicesReducer";
import PlacesReducer from "./reducers/PlacesReducer";
import FavoritesReducer from "./reducers/FavoritesReducer";
import DetailReducer from "./reducers/DetailReducer";
import CommentReducer from "./reducers/CommentReducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    serviceReducer: ServicesReducer,
    placesReducer: PlacesReducer,
    favoritesReducer: FavoritesReducer,
    detailReducer: DetailReducer,
    commentReducer: CommentReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));