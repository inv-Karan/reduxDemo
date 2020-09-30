import { DISPLAY_POST, ADD_POST, UPDATE_POST, REMOVE_POST, SAMPLE_POST, SAMPLE_UPDATE_POST, SAMPLE_REMOVE_POST, FILTERED_POST } from '../actions/types';

const initialState = {
    items : [{
        id: '1',
        title:'title',
        body:'body'
    },
    {
        id: '2',
        title:'title2',
        body:'body2'
    },
    {
        id: '3',
        title:'title3',
        body:'body3'
    },]
};

export default function postReducer(state = initialState, action) {
    switch(action.type) {
        case DISPLAY_POST:
            return {
                ...state,
                items: action.payload
            };
        case ADD_POST:
            return {
                ...state,
                items : action.payload
            };
        case UPDATE_POST:
            return {
                ...state,
                items : action.payload
            };
        case REMOVE_POST:
            return {
                ...state,
                items : action.payload
            };
        case SAMPLE_POST:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case SAMPLE_UPDATE_POST:
            return {
                ...state,
                items : state.items.map(
                    item => 
                    item.id === action.payload.id
                    ? action.payload
                    : item
                )
            };
        case SAMPLE_REMOVE_POST:
            return {
                ...state,
                items : state.items.filter(
                    item => 
                    item.id === action.payload.id
                )
            };
        case FILTERED_POST:
            return {
                ...state,
                items : action.payload
            };
        default:
            return state;
    };
};