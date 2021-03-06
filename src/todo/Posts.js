import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayPost, sampleUpdatePost, sampleRemovePost, filteredPost } from '../todo/actions/postActions';

class Posts extends Component {

    // componentDidMount() {
    //     this.props.displayPost();
    // };

    render() {
        debugger
        const postItems = this.props.post.map(post => (
            <div key = {post.id}>
                <h2>{post.id}</h2>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            {/* </div> */}
            <button onClick = {() => {
                debugger
                // const post = {id : this.state.id, title : this.state.title, body : this.state.body}

                // this.props.sampleUpdatePost(post)
                console.log(`updated ${post.id} on edit button clicked!` )
                // debugger
                const mappedpostItems = this.props.post.map(item => (
                    item.postItems
                ))
                console.log(mappedpostItems)
                this.props.selectedPost(mappedpostItems)
            }}>
                Edit
            </button>
            <button onClick = {() => {
                debugger
                // const post = {id : this.state.id}

                // this.props.sampleRemovePost(post)
                console.log(`deleted ${post.id} on erase button clicked!` )
                const filteredpostItems = this.props.post.filter(item => (
                    post.id !== item.id
                ))
                console.log(filteredpostItems)
                this.props.filteredPost(filteredpostItems)
            }}>
                Erase
            </button>
            </div>
        ));
        return(
            <div>
                <h1>Posts</h1>
                {postItems}
                {/* <button onClick = {() => {
                    const post = {id : this.state.id, title : this.state.title, body : this.state.body}

                    this.props.sampleUpdatePost(post)
                }}>
                    Edit
                </button>
                <button onClick = {() => {
                    const post = {id : this.state.id}

                    this.props.sampleRemovePost(post)
                }}>
                    Erase
                </button> */}
            </div>
        );
    };
};

const mapStateToProps = state => { debugger 
    return 
    {
        post : state.post.items,
        post1 : state.post.selectedPost
    };
};

const mapDispatchToProps = {
    displayPost, sampleUpdatePost, sampleRemovePost, filteredPost, selectedPost
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);