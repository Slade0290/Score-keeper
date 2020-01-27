import { AsyncStorage } from 'react-native';

export const DETAIL_INIT = 'DETAIL_INIT';
export const DETAIL_ADD = 'DETAIL_ADD';
export const DETAIL_DELETE = 'DETAIL_DELETE';

export const initPlaceDetailAsync = () => {
    //console.log("initPlaceDetailAsync");
    return dispatch => {
        AsyncStorage.getItem('placeDetail').then(data => {
            return dispatch({ type: DETAIL_INIT, payload: JSON.parse(data) });
        });
    };
}

export const addPlaceDetailAsync = (marker) => {
    return dispatch => {
        AsyncStorage.getItem('placeDetail').then(data => {
            let tab = [];
            tab.push(marker);
            AsyncStorage.setItem('placeDetail', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: DETAIL_INIT, payload: tab });
                });
        });
    }
}

export const deletePlaceDetailAsync = (placeName) => {
    return dispatch => {
        AsyncStorage.getItem('placeDetail').then(data => {
            const tab = JSON.parse(data);
            tab.splice(tab.findIndex(e => e === placeName), 1);
            AsyncStorage.setItem('placeDetail', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: DETAIL_INIT, payload: JSON.parse(data) });
                });
        });
    };
}
