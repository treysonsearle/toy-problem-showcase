import React, { Component } from 'react';

export default class FilterString extends Component {
    
    constructor(){
        super()
        this.state ={
        quotes: ['Hello there', 'General Kenobi', 'The force is strong with this one'],
        userInput: '',
        filteredQuotes: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterQuotes(userInput) {
        let quotes = this.state.quotes;
        let filteredQuotes = [];
    
        for ( let i = 0; i < quotes.length; i++ ) {
          if ( quotes[i].includes(userInput) ) {
            filteredQuotes.push(quotes[i]);
          }
        }
    
        this.setState({ filteredQuotes: filteredQuotes });
      }
    
    
    
    
    render(){
        return (
            
            <div className="puzzleBox filterStringPB">
            <h4 >Filter String</h4>
            <span className="puzzleText"> Quotes: { JSON.stringify(this.state.quotes, null, 10) }</span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) } />
            <button className="confirmationButton" onClick={ () => this.filterQuotes(this.state.userInput) }>Filter</button>
            <span className="resultsBox filterStringRB"> Filtered Quotes: { JSON.stringify(this.state.filteredQuotes, null, 10) }</span>
            </div>
        )
    }
}