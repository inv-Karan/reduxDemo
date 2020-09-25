import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayPost } from '../todo/actions/postActions';

class Posts extends Component {

    // componentDidMount() {
    //     this.props.displayPost();
    // };

    render() {
        const postItems = this.props.post.map(post => (
            <div key = {post.id}>
                <h2>{post.id}</h2>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return(
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    };
};

const mapStateToProps = state => ({
    post : state.post.items
});

const mapDispatchToProps = {
    displayPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);