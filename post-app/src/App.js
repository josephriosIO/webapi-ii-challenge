import React, { Component } from "react";
import { getPost, deletePost } from "./actions";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getPost();
  }

  onDelete = id => {
    this.props.deletePost(id);
  };

  render() {
    return (
      <div className="App">
        {this.props.fetchedPost
          ? this.props.posts.map(post => (
              <div>
                <h2>{post.title}</h2>
                <p>{post.contents}</p>
                <button onClick={this.onDelete.bind(this, post.id)}>
                  delete
                </button>
              </div>
            ))
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchedPost: state.postReducers.fetchedPost,
  posts: state.postReducers.posts
});

export default connect(
  mapStateToProps,
  { getPost, deletePost }
)(App);
