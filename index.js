class Counter extends React.Component  {
    constructor(props){
        super(props);
    this.state = {
        counter:0
       };
    }
counterFunction = ()=> {
    this.setState({
        counter: this.state.counter += 1
    })
}

render(){
    return <div>
    <button onClick = {this.counterFunction}>click me</button>
    counter increases by {this.state.counter}
    </div>
  }
}
ReactDOM.render(<Counter/>, document.getElementById('root'))