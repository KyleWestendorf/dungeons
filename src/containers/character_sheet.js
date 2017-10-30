import React, { Component } from 'react';
// Here we import connect and fetchCharacter action so that the component has access
// to the action
import { connect } from 'react-redux';
import { fetchCharacter } from '../actions'

export class CharacterSheet extends Component {
  componentDidMount() {
    this.props.fetchCharacter();
  }
  render() {
    console.log(this.props.name[0].name);
    return (
      <div>
       <p>{this.props.name[0].name}</p>
       <p>{this.props.name[0].health}</p>
       <p>{this.props.strength[0].number}</p>
      </div>
    );
  }
}

// this is trying to create character available as this.props.character
function mapStateToProps(state) {
  return {
    character: state.character,
    name: state.name,
    strength: state.strength
  };
}
// This connects fetchCharacter function from actions and the character_sheet.js
export default connect(mapStateToProps, {fetchCharacter})(CharacterSheet);
