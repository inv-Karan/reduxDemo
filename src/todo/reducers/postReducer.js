import { AXIOS_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items : [{
        title:'abc',
        body:'123456'
    }],
    item : {}
};

export default function(state = initialState, action) {
    switch(action.type) {
        case AXIOS_POSTS:
            // console.log('reducer');
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item : action.payload
            };
        default:
            return state;
    };
};