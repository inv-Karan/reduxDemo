import React, { Component } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from './actions/postActions';
import Posts from './Posts';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title : [],
            body : []
            // title : " ",
            // body : " "
        };
    };

    onChangeTitle = e => {
        this.setState({ 
            title : e.target.value, 
        });
    };

    onChangeBody = e => {
        this.setState({ 
            body : e.target.value 
        });
    };


    onSubmit = e => {
        e.preventDefault();

        const post = {}

    // axios.post('https://jsonplaceholder.typicode.com/posts', {
        // headers: {
        //     'content-type': 'application/json'
        // },
        // body: JSON.stringify(this.state.body)

    //  })
    // .then(res => {
        // console.log(res);
        // console.log(res.data);
        // res.json()
    // });
    debugger
        this.props.createPost(post);
    };

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <div>
                        <label>Title: </label><br />
                        <input type = "text" 
                        name = "title" 
                        onChange = {this.onChangeTitle}
                        value = {this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea name = "body" 
                        onChange = {this.onChangeBody}
                        value = {this.state.body} />
                    </div>
                    <br />
                    <button type = "submit">Submit</button>
                </form>
            </div>
        );
    };
};

PostForm.propTypes = {
    createPost : PropTypes.func.isRequired
};

// export default PostForm;
export default connect(null, { createPost })(PostForm);