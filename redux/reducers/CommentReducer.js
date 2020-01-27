import { COMMENT_INIT } from  '../actions/CommentsActions'

const INITIAL_STATE = {
    comments: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'COMMENT_INIT':
            return { comments: action.payload}
    }
    return state;
}
