import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor(){
        super()

        this.state = {
            
            dogs: [{name: 'Max', type: 'Yorkie', age: 5, hairColor: 'brown'}, {name: 'Daisy', type: 'German Shepard', age: 2, job: 'K9 Force'}, {name: 'Lilly', type: 'Corgi', age: 6, cuteLegs: true}],
            userInput: '',
            filteredDogs: []

        }
    }

    handleChange(val) {
        this.setState({ userInput: val})
    }

    filterDogs(prop) {
        let dogs = this.state.dogs;
        let filteredDogs = [];

        for(let i = 0; i < dogs.length; i++){
            if(dogs[i].hasOwnProperty(prop)){
                filteredDogs.push(dogs[i])
            }
        }
        this.setState({ filteredDogs: filteredDogs});
    }
    
    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.dogs, null, 10)}</span>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={() => this.filterDogs(this.state.userInput)}> Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredDogs, null, 10) }</span>
                
            </div>
        )
    }
}