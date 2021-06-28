import React, { Component} from 'react';
import Welcome from './Welcome';

class counters extends Component {
    

    render () {
                           //  this is used to replace this.props everywhere
    //    const { onReset, counters, onDelete,onIncrement} = this.props;

    console.log("render-counters");
        return(
        <div>
            <button className="btn btn-success btn-sm m-2"
                           //   onClick={onReset} used when props is given as const above
            onClick={this.props.onReset}
            >
                <i className="fa fa-refresh"/>
            </button>

             {/* composing the other components */}
            { this.props.counters.map(counter =>
            <Welcome 
            key={counter.id} 
           onDelete={this.props.onDelete} 
        // value={counter.value} 
        // id = {counter.id}  these two together can be replaced as below :
        counter = {counter}
        onIncrement = {this.props.onIncrement}
        onDecrement = {this.props.onDecrement}
        /> 
        )}

        </div>
        );
    }
}

export default counters;