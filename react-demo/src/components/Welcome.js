import React, {Component} from 'react'

class Welcome extends Component{
    // special property that includes data that the component needs
    // state = { 
    //     count: this.props.counter.value

       // imageurl : "https://picsum.photos/200"
    //    tags: ['tag1', 'tag2', 'tag3']
    // };

    styles = {
        fontSize: 15,
        fontWeight: "bold"
    }

    // constructor(){
             // must call super consstructor in derived class before using this
             // to replace the constructor can use arrow function directly in the event handler
    //      super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
        
    // }

    // handleIncrement = () => {
    //     // console.log("increment clicked", this);
    //     // console.log(product);
    //     this.setState({ count: this.state.count + 1});
    // }

    // dohandleincrement = () => {
    //     this.handleIncrement({id:1});
    // }
    render() {
        console.log("render-welcome");
    

        return (  
        <div>
              {/* to dynamically give values  */}
              {/* <img src={this.state.imageurl} alt=""></img>
            <span>{this.state.count}</span> <br></br>*/}
            {/* <span>{<h1>Welcome to class component</h1>}</span> <br></br> */}

            <span  style= {this.styles} className={this.getBadgeClasses()}>{ this.formatCount()}</span> 
     
            <button className="btn btn-secondary btn-sm m-2" 
            onClick={() => this.props.onIncrement(this.props.counter) }>
                 <i className="fa fa-plus-square"/>
            </button>

             <button className="btn btn-info btn-sm" 
            onClick={() => this.props.onDecrement(this.props.counter) }>
                 <i className="fa fa-minus-square"/>
            </button>

            <button className="btn btn-danger btn-sm m-2 "
            onClick={() => this.props.onDelete(this.props.counter.id)}
            >
                 <i className="fa fa-trash"/>
            </button>

            {/* <ul>
                {this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}
            </ul> */}
            </div>
        );
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;

    }


   // giving a function
    formatCount() {
        const {value} = this.props.counter;
        return value ===0 ? "Zero" :value;
        // return this.state.count === 0 ? 'Zero' : this.state.count;
    }
}

export default Welcome