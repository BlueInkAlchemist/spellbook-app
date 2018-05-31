import React from 'react';

export default class SpellForm extends React.Component {
    
  constructor(props) {
      super(props);
      this.state = {
          // classSelect: 'wizard',
          magicSchool: 'abjuration',
          classLabel: "Choose your character's class:",
          schoolLabel: "Choose an arcane school:"
      };
      
      this.handleChange = this.handleChange.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
      // alert(event.target.value);
      this.setState({value: event.target.value});
  }
  
  handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      
      this.setState({
          [name]: value
      });
  }
  
  handleSubmit(event) {
      alert('submit clicked');
      event.preventDefault();
  }
  
  render() {
      return (
          <form onSubmit={this.handleSubmit}>
            <label>
                Spell Name:
                <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
                {this.state.classLabel}
                <select name="class" onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="bard">Bard</option>
                    <option value="cleric">Cleric</option>
                    <option value="druid">Druid</option>
                    <option value="paladin">Paladin</option>
                    <option value="ranger">Ranger</option>
                    <option value="sorcerer">Sorcerer</option>
                    <option value="warlock">Warlock</option>
                    <option value="wizard">Wizard</option>
                </select>
            </label>
            <label>
                {this.state.schoolLabel}
                <select name="school" onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="abjuration">Abjuration</option>
                    <option value="conjuration">Conjuration</option>
                    <option value="divination">Divination</option>
                    <option value="enchantment">Enchantment</option>
                    <option value="evocation">Evocation</option>
                    <option value="illusion">Illusion</option>
                    <option value="necromancy">Necromancy</option>
                    <option value="transmutation">Transmutation</option>
                </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
      );
  }
}
