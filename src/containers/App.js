import React , {Component} from 'react';
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

class App extends Component {
    constructor(){
        super()
        //state is used to tell the child component what to render and
        //pass them down to component as props
        this.state = {
            robots : [],
            searchField : ''
        }
    }

    //created a function to trigger when search is occured
    onSearchchange = (event) =>{
        this.setState({ searchField: event.target.value })
        //setting the searchfiled value to the user input
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users') //fetching the user from an API
        .then( response => response.json())
        .then(users => this.setState({ robots:users }) )  //setting the robots to the response of the API
        
    }

    render(){
        const {robots , searchField } = this.state
        //filtering the robots using the searchfield
        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        })

        return !robots.length ? 
        <h1>Loading...</h1> :
        (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchchange}/>
                <Scroll>
                    <ErrorBoundary> 
                        <CardList robots = {filterRobots}/>
                    </ErrorBoundary>
                </Scroll>
                
            </div>
        )
    }
   
}

export default App;