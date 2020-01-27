import { AsyncStorage } from 'react-native';

export const PLACES_INIT = 'PLACES_INIT';
export const PLACES_ADD = 'PLACES_ADD';
export const PLACES_DELETE = 'PLACES_DELETE';

export const initPlaceAsync = () => {
    console.log("initPlaceAsync");
    return dispatch => {
        AsyncStorage.getItem('places').then(data => {
            return dispatch({ type: PLACES_INIT, payload: JSON.parse(data) });
        });
    };
}

export const addPlaceAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('places').then(data => {
            let tab = [];
            if (data !== null) {
                tab = JSON.parse(data);
            }
            tab.push(this.state.placeName);
            AsyncStorage.setItem('places', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: PLACES_INIT, payload: tab });
                });
        });
    }
}

export const deleteAsync = (placeName) => {
    return dispatch => {
        AsyncStorage.getItem('places').then(data => {
            const tab = JSON.parse(data);
            tab.splice(tab.findIndex(e => e === placeName), 1);
            AsyncStorage.setItem('places', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: PLACES_INIT, payload: JSON.parse(data) });
                });
        });
    };
}
