import React, { Component } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { axiosPosts } from '../todo/actions/postActions';

class Posts extends Component {

    componentDidMount() {
        this.props.axiosPosts();
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        };
    };
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         posts : []
    //     }
    // }
    // componentDidMount() {
    //     //console.log();
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => {
    //         // let data = console.log(res.data);
    //         this.setState({ posts : res.data });
    //         console.log(res.data);
    //     });
        
    // };

    render() {
        debugger
        const postItems = this.props.posts.map(post => (
            <div key = {post.id}>
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

Posts.propTypes = {
    axiosPosts : PropTypes.func.isRequired,
    posts : PropTypes.array.isRequired,
    newPost : PropTypes.object
};

const mapStateToProps = state => ({
    posts : state.posts.items,
    newPost : state.posts.item
});

const mapDispatchToProps = {
    axiosPosts
}

// export default Posts;
export default connect(mapStateToProps, mapDispatchToProps)(Posts);