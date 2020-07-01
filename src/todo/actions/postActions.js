import { AXIOS_POSTS, NEW_POST } from './types';
import axios from 'axios';
import Posts from '../Posts';

export const axiosPosts = () => dispatch => {
    console.log('getting');
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => {
        // let data = console.log(res.data);
        dispatch({
            type : AXIOS_POSTS,
            payload : posts.data
        });
        console.log(posts.data);
    });
};

export const createPost = (postData) => dispatch => {
    console.log('action called');
    axios.post('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
     })
    // .then(res => {
    //     console.log(res.data);
    //     res.json()
    // })
    .then(post => {
        dispatch({
            type : NEW_POST,
            payload : post.data
        });
        console.log(post.data);
    });
};