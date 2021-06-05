import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './actions';
import './app.scss';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';

const tempArray = [{
  fName: "Savidya",
  lName: "Sathyani",
  email: "savidya19@gmail.com",
  age: 26,
  onlineStatus: true,
}];

const initialState = {
  hideBtn: false,
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      ...initialState,
    };

    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.toggleButtonVisibility();
  }

  toggleButtonVisibility() {
    const {
      hideBtn,
    } = this.state;

    this.setState({
      hideBtn: !hideBtn,
    })
  }

  incrementNumbers(number) {
    return number + 1;
  }

  render() {

    const {
      posts,
    } = this.props;

    const {
      hideBtn,
    } = this.state;

    const configButton = {
      buttonText: 'Get Posts',
      emitEvent: this.fetch,
    };

    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header={"Posts"} description={"Click the button to render posts"} tempArray={tempArray} />
          {!hideBtn &&
            <SharedButton {...configButton} />
          }
          {posts.length > 0 &&
            <div>
              {posts.map((item, index) => {
                const {
                  title,
                  body,
                } = item;
                const configListItem = {
                  title,
                  description: body,
                }
                return (<ListItem key={index} {...configListItem} />);
              })}
            </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
