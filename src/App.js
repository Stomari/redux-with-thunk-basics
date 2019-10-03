import React from 'react';
import './App.css';
import { increment, sum } from './actions/index';
import { connect } from 'react-redux';
import { fetchImage } from './thunk/thunk';

class App extends React.Component {
  state = {
    input: 0
  }

  componentDidMount() {
    this.props.fetchImage();
  }

  inputHandler = (event) => {
    const { value } = event.target;
    this.setState({ input: value })
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.sum(parseInt(this.state.input));
    this.setState({ input: 0 })
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={() => this.props.increment()}>ADD 1</button>
        <h1>{this.props.number}</h1>
        <hr/>
        <form onSubmit={(event) => this.submitHandler(event)}>
          <input type='number' value={this.state.input} onChange={(event) => this.inputHandler(event)}/>
          <button type='submit'>SUM</button>
        </form>
        {
          this.props.image && <img style={{marginTop: "100px"}} src={this.props.image} alt='Gorila'/>
        }
      </div>
    );
  }
}

// Any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the wrapped component’s props.
const mapStateToProps = (state) => {
  return {
    number: state.counter.num,
    image: state.image.imageUrl
  }
}

// Your mapDispatchToProps functions are expected to return an object. Each fields of the object should be a function, calling which is expected to dispatch an action to the store.
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    sum: (num) => dispatch(sum(num)), 
    fetchImage: () => dispatch(fetchImage())
  }
}

// The connect() function connects a React component to a Redux store. It provides its connected component with the pieces of the data it needs from the store, and the functions it can use to dispatch actions to the store.
export default connect(mapStateToProps, mapDispatchToProps)(App);
