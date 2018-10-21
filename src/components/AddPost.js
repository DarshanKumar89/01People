import React, { Component } from "react";
import PropTypes from "prop-types";

class AddPosts extends Component<Props> {
  props: Props;

  render() {
    const { title, body, addPost, handleChange } = this.props;

    return (
      <div>
        <div class="card" />
        <div class="card-body">
          <h4>Add post</h4>
          <form onSubmit={addPost}>
            <div class="form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                class="form-control"
                onChange={event => handleChange(event)}
              />
            </div>
            <div class="form-group">
              <label>Body:</label>
              <textarea
                class="form-control"
                name="body"
                onChange={event => handleChange(event)}
              />
            </div>
            <div class="text-right">
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

AddPosts.propTypes = {
  addPost: PropTypes.func,
  handleChange: PropTypes.func,
  title: PropTypes.string,
  body: PropTypes.string
};

AddPosts.defaultProps = {
  title: "",
  body: ""
};

export default AddPosts;
