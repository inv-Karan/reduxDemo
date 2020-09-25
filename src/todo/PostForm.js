import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost, updatePost, removePost, samplePost } from './actions/postActions';

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id : "",
            title : [],
            body: []
        };
    };

    onChangeId = e => {
        this.setState({
            id : e.target.value,
        });
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
        const post = {id : this.state.id, title : this.state.title, body : this.state.body}

        debugger
        // this.props.addPost(post);
        this.props.samplePost(post);
    };

    render() {
        return (
            <div>
                <h1>My Posts</h1>
                    <div>
                        <label>ID: </label><br />
                        <input 
                        type = "number" 
                        name = "id"
                        placeholder = "none"
                        onChange = {this.onChangeId}
                        value = {this.state.id} />
                    </div>
                    <br />
                    <div>
                        <label>Title: </label><br />
                        <input 
                        type = "text" 
                        name = "title" 
                        placeholder = "none" 
                        onChange = {this.onChangeTitle}
                        value = {this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <textarea 
                        name = "body" 
                        placeholder = "none" 
                        onChange = {this.onChangeBody}
                        value = {this.state.body} />
                    </div>
                    <br />
                    <button onClick = {() => {
                        this.onSubmit()
                    }} >Submit</button>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    post : state.post.items
});

const mapDsipatchToProps = {
    addPost,
    removePost,
    updatePost,
    samplePost
};

export default connect(mapStateToProps, mapDsipatchToProps)(PostForm);