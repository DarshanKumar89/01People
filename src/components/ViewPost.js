import React, { Component } from "react";

import PropTypes from "prop-types";

class ViewPosts extends Component {
  render() {
    const { dataSource, deletePostCallback } = this.props;
    console.log("wwkdn", dataSource);
    return (
      <div>
        <h4 class="mt-5">Last posts</h4>
        <table class="table">
          <thead>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th />
          </thead>
          <tbody>
            {dataSource.map(listItem => (
              <tr>
                <td>#{listItem.id}</td>
                <td> {listItem.title}</td>
                <td>{listItem.body}</td>
                <td>
                  <button
                    class="btn btn-danger btn-sm"
                    onClick={deletePostCallback.bind(null, listItem.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>#{dataSource.id}</td>
              <td> {dataSource.title}</td>
              <td>{dataSource.body}</td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  onClick={deletePostCallback.bind(null, dataSource.id)}
                >
                  Delete
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}

ViewPosts.propTypes = {
  deletePostCallback: PropTypes.func,
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  dataSource: PropTypes.array
};

ViewPosts.defaultProps = {
  id: "",
  title: "",
  body: ""
};

export default ViewPosts;
