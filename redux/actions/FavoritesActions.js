import {AsyncStorage} from 'react-native'

export const FAVORITES_INIT = 'FAVORITES_INIT';

export const initFavoritesAsync = () => {
    //console.log("initFavoritesAsync");
    return dispatch => {
        AsyncStorage.getItem('favoritesPlace').then(data => {
            //console.log("data : ", data);
            return dispatch({type: FAVORITES_INIT, payload: JSON.parse(data)});
        });
    };
};

export const onToggle = (place) => {
    console.log("toggleFavorites");
    return dispatch => {
        AsyncStorage.getItem('favoritesPlace').then(data => {
            let tab = [];
            if (data !== null) {
                console.log(data);
                let isFavorite = false;
                tab = JSON.parse(data);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id === place.id) {
                        isFavorite = true
                    }
                }
                if (!isFavorite) {
                    tab.push(place);
                    AsyncStorage.setItem('favoritesPlace', JSON.stringify(tab))
                        .then(() => {
                            return dispatch({type: FAVORITES_INIT, payload: tab});
                        });
                }
            }else{
                tab.push(place);
                AsyncStorage.setItem('favoritesPlace', JSON.stringify(tab))
                    .then(() => {
                        return dispatch({type: FAVORITES_INIT, payload: tab});
                    });
            }
        });
    }
};

export const deleteAsync = (favoriteId) => {
    return dispatch => {
        AsyncStorage.getItem('favoritesPlace').then(data => {
            const tab = JSON.parse(data);
            tab.splice(tab.findIndex(e => e.id === favoriteId), 1);
            AsyncStorage.setItem('favoritesPlace', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: FAVORITES_INIT, payload: JSON.parse(data) });
                });
        });
    };
}
