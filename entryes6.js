import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import $ from 'jquery';
import firebase from 'firebase';
import fetch from 'isomorphic-fetch';

class Counter extends Component {
	
	constructor(props){
		super(props);
		this.state = {
      counter: null,
			error: false,
			loading: false
    }
	}
	
	render(){
		console.log(this.state);
		if (this.state.loading){
			return <div>Loading...</div>
		} else{
			return <div>
				{ this.error() }
				{ this.state.error ? <div>Error, did not compute</div> : null }
				<div>Counter: { this.state.counter }</div>
				<div><button onClick={ this.increment }>Add One</button></div>
				<div><button onClick={ this.decrement }>Minus One</button></div>
				<div><button onClick={ this.reset }>Reset</button></div>
			</div>
		}
	}
	
	error(){
		if (this.state.error){
			return <div>Error, did not compute</div>
		}
	}

  increment() {
		
    var newCount = this.state.counter + 1;
		var oldCount = this.state.counter;
		
		this.updateDatabase(oldCount, newCount);
		
    this.setState({counter: newCount});
  }
	
	decrement() {
		
    var newCount = this.state.counter - 1;
		var oldCount = this.state.counter;
		
		this.updateDatabase(oldCount, newCount);
		
    this.setState({counter: newCount});
  }
	
	reset() {
    var newCount = this.state.counter = 0;
    var oldCount = this.state.counter;
		
		this.updateDatabase(oldCount, newCount);
		
    this.setState({counter: newCount});
  }
	
	updateDatabase(oldCount, newCount) {
		var component = this;
		$.ajax({
			url: "https://dat-counter.firebaseio.com/.json",
			method: "PUT",
			data: JSON.stringify(newCount),
			error(){
				component.setState({counter: oldCount, error: true});
			}
		})		
    this.setState({counter: newCount});
  }

  componentDidMount() {
		var component = this;
    $.ajax({
			url: "https://dat-counter.firebaseio.com/.json",
			method: "GET",
			success: (data) => {
				component.setState({counter: data, loading: false})
			}
		})
  }
	
}

ReactDOM.render(<Counter />, document.getElementById('placeholder'));
