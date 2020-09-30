import { ADD_POST, 
    REMOVE_POST, 
    UPDATE_POST, 
    DISPLAY_POST, 
    SAMPLE_POST, 
    SAMPLE_UPDATE_POST, 
    SAMPLE_REMOVE_POST,
    FILTERED_POST
 } from './types';
import axios from 'axios';

export const displayPost = () => dispatch => {
    console.log('getting');
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(post => {
        dispatch({
            type : DISPLAY_POST,
            payload : post.data
        });
        console.log(post.data);
    });
};

export const addPost = (id, title, body) => dispatch => {
    debugger
    console.log('action called');
    axios.post(`https://jsonplaceholder.typicode.com/posts`, {id : id, title : title, body : body}) // id, title, body from end-user to get response from relative api keys id, name, content respectively. Will be provided by postman collection from api developer.
    .then(post => {
        dispatch({
            type : ADD_POST,
            payload : post.data
        });
        console.log(post.data);
    });
};

export const removePost = (id) => dispatch => {
    console.log('action called');
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(post => {
        dispatch({
            type : REMOVE_POST,
            payload : post.data
        });
    });
};

export const updatePost = (id, title, body) => dispatch => {
    console.log('action called');
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {title : title, body : body}) // title, body from end-user to get response from relative api keys name, content respectively. Will be provided by postman collection from api developer.
    .then(post => {
        dispatch({
            type : UPDATE_POST,
            payload : post.data
        });
        console.log(post.data);
    });
};

export const samplePost = (post) => dispatch => {
    debugger
    console.log('action called')
    dispatch({
        type : SAMPLE_POST,
        payload : post
    });
};

export const sampleUpdatePost = (post) => dispatch => {
    debugger
    console.log('action called')
    dispatch({
        type : SAMPLE_UPDATE_POST,
        payload : post
    });
};

export const sampleRemovePost = (post) => dispatch => {
    debugger
    console.log('action called')
    dispatch({
        type : SAMPLE_REMOVE_POST,
        payload : post.id
    });
};

export const filteredPost = (post) => dispatch => {
    debugger
    console.log('action called')
    dispatch({
        type : FILTERED_POST,
        payload : post
    });
};