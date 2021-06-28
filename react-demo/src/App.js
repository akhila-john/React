// import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Counters from "./components/Counters";
import Navbar from './components/Navbar';

class  App extends Component {

  state ={
    counters: [
        { id:1, value:4},
        { id:2, value:0},
        { id:3, value:0},
        { id:4, value:0}
    ]
};

constructor() {
  super(); //call constructor of parent class using constructor
  console.log("app-constructor lifecycle hook");
}

componentDidMount(){
  console.log("app-mount lifecycle hook");
}

handleIncrement = counter => {
    const counters = [...this.state.counters]; // new counters array
    const index = counters.indexOf(counter); // index of the array
    counters[index] = {...counter}; // clone the counter object received
    counters[index].value++; // to increment the value
   this.setState({counters}); // update the array

};
handleDecrement = counter => {
  const counters = [...this.state.counters]; // new counters array
  const index = counters.indexOf(counter); // index of the array
  counters[index] = {...counter}; // clone the counter object received
  counters[index].value--; // to increment the value
 this.setState({counters}); // update the array

};

handleReset = () => {
    const counters =  this.state.counters.map(c => {
        c.value = 0;
        return c
    });
    this.setState({counters})
};

handleDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
    // console.log("event handler called", counterId);
}

  render(){
    console.log("app-render lifecycle hook");

 
  return (
   <div>
    <Navbar 
      totalCounters ={this.state.counters.filter(c => c.value>0).length}
    />
    <main className="container">
      <Counters
      counters = {this.state.counters}
      onIncrement = {this.handleIncrement}
      onDecrement = {this.handleDecrement}
      onReset = {this.handleReset}
      onDelete = {this.handleDelete}
      
      />
    </main>
    </div>
    
  );
}
}
export default App;
