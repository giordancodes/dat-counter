var ReactDOM = require('react-dom');
var React = require('react');
var firebase = require('firebase');
var fetch = require('isomorphic-fetch');
var $ = require('jquery');

var Counter = React.createClass({
  getInitialState: function() {
    return {
      counter: null
    }
  },

  render: function() {
    console.log(this.state);
    return <div>
      <div>Counter: { this.state.counter }</div>
      <div><button onClick={ this.increment }>Add One</button></div>
    </div>
  },

  increment: function() {
    var newCount = this.state.counter + 1;

    this.setState({counter: newCount});
  },

  componentDidMount: function() {
    var component = this;
  }
});

ReactDOM.render(<Counter />, document.getElementById('placeholder'));
