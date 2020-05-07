import React , { Component } from'react'
import { Robot } from'../components/Robotname';
import Robotlist from '../components/Robotlist'
import Seachbox from '../components/Searbox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundary'

class App extends Component  {

    constructor () {
        super()
        this.state = {
            Robot:[],
            Searchfield:""
        }
    }
    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>   this.setState({Robot:Robot}) )

    }
    onchange = (event) => {
     this.setState({Searchfield: event.target.value})
    }
    render () {
      const {Robot,Searchfield}=this.state
       const fitteredRobot =  Robot.filter(Robot =>{
            return Robot.name.toLowerCase().includes(Searchfield.toLowerCase())

        })
        return !Robot.length ?
         <h1> LOADING....</h1>:
            <div className="tc ">
                <h2 className="header">ROBOT FRIEND</h2>
               <Seachbox onchange={this.onchange}/>
               <Scroll>
               <ErrorBoundry>
                  <Robotlist  Robot={fitteredRobot} />
              </ErrorBoundry>
              </Scroll>
            </div>

        }
}
export default App
