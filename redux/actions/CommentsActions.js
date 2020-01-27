import {AsyncStorage} from 'react-native'

export const COMMENT_INIT = 'COMMENT_INIT';

export const initCommentsAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('comments').then(data => {
            return dispatch({type: COMMENT_INIT, payload: JSON.parse(data)});
        });
    };
};

export const onToggleCommentAsync = (comment) => {
    return dispatch => {
        AsyncStorage.getItem('comments').then(data => {
            let tab = [];
            if (data !== null) {
                tab = JSON.parse(data);
            }
            tab.push(comment);
            AsyncStorage.setItem('comments', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: COMMENT_INIT, payload: tab });
                });
        });
    }
};

export const deleteCommentAsync = (id) => {
    return dispatch => {
        AsyncStorage.getItem('comments').then(data => {
            const tab = JSON.parse(data);
            tab.splice(tab.findIndex(e => e === id), 1);
            AsyncStorage.setItem('comments', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: COMMENT_INIT, payload: JSON.parse(data) });
                });
        });
    };
}