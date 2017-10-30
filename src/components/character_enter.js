import React, { Component } from 'react';

export default class App extends Component {

    render() {
    return (
      <div>
          <form>
            <div className="form-group">
              <label htmlfor="Character Name">Enter Character Name</label>
              <input type="text" className="form-control" name="characterName" id="characterName" placeholder="Who is your character?" />
            </div>
            <div className="form-group">
              <label htmlfor="Select Class">Select Class</label>
              <select className="form-control" name="characterClass" id="characterName" placeholder="What class is your character?">
                <option>Barbarian</option>
                <option>Bard</option>
                <option>Druid</option>
                <option>Monk</option>
                <option>Paladin</option>
                <option>Ranger</option>
                <option>Sorcerer</option>
                <option>Warlock</option>
              </select>
              <div className="form-group">
                <label htmlfor="Select Level">What level is your character?</label>
                <select className="form-control" id="characterName" placeholder="1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlfor="Strength">Strength</label>
                <input type="text" className="form-control" name="strength" id="strength" placeholder="What is your character's strength?" />
              </div>
              <div className="form-group">
                <label htmlfor="Dexterity">Dexterity</label>
                <input type="text" className="form-control" name="dexterity" id="dexterity" placeholder="What is your character's dexterity?" />
              </div>
              <div className="form-group">
                <label htmlfor="Constitution">Constitution</label>
                <input type="text" className="form-control" name="constitution" id="constitution" placeholder="What is your character's constitution?" />
              </div>
              <div className="form-group">
                <label htmlfor="Wisdom">Wisdom</label>
                <input type="text" className="form-control" name="wisdom" id="wisdom" placeholder="What is your character's wisdom?" />
              </div>
              <div className="form-group">
                <label htmlfor="Intelligence">Intelligence</label>
                <input type="text" className="form-control" name="intelligence" id="intelligence" placeholder="What is your character's intelligence?" />
              </div>
              <div className="form-group">
                <label htmlfor="Charisma">Charisma</label>
                <input type="text" className="form-control" name="charisma" id="charisma" placeholder="What is your character's charisma?" />
              </div>
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
      </div>
    );
  }
}
