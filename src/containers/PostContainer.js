import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import axios from "axios";
import _ from "lodash";

import AddPosts from "../components/AddPost";
import ViewPosts from "../components/ViewPost";

let base_url = "https://jsonplaceholder.typicode.com";

export class PostContainer extends Component {
  static propTypes = {
    form: PropTypes
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      dataSource: [],
      id: "",
      title: "",
      body: ""
    };
  }

  getPosts = () => {
    axios
      .get(base_url + `/posts?userId=1`)
      .then(response => {
        console.log("response-get", response);

        this.setState({
          dataSource: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getPosts();
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addPost = event => {
    event.preventDefault();
    console.log("post add", this.state.title, this.state.body);

    let data = {
      title: this.state.title,
      body: this.state.body,
      userId: 1
    };

    axios
      .post(base_url + `/posts`, data)
      .then(response => {
        console.log("response-post", response.data);
        let newPostArray = [];
        newPostArray.push(response.data);
        this.setState({
          dataSource: newPostArray
        });
      })
      .catch(error => {
        console.log(error);
      });
    alert("The Post is Sumbitted Successfully");
  };

  deletePostCallback = (id: String) => {
    console.log("dele", id);
    axios
      .delete(base_url + `/posts/` + id)
      .then(response => {
        console.log("response-delete", response.data);
        //updating state after deleting and response give null from api for now
        this.setState({
          dataSource: response.data
        });

        //just getting updated post since the data is not being updated from API
        // this.getPosts();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div class="container pt-5 pb-5">
        <div class="col-md-8 md-offset-2">
          <AddPosts addPost={this.addPost} handleChange={this.handleChange} />

          <ViewPosts
            dataSource={this.state.dataSource}
            deletePostCallback={this.deletePostCallback}
          />
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementNum());
    },
    decrement: () => {
      dispatch(decrementNum());
    },
    resetCount: payload => {
      dispatch(resetCounter(payload));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PostContainer);
