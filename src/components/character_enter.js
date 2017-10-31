import React, { Component } from 'react';

export default class App extends Component {


    render() {
    return (
      <div>
          <form method="post">
            <div className="form-group">
              <label htmlFor="Character Name">Enter Character Name</label>
              <input type="text" className="form-control"
                    name="characterName"
                    id="characterName"
                    placeholder="Who is your character?" />
            </div>
            <div className="form-group">
              <label htmlFor="Select Class">Select Class</label>
              <select className="form-control"
                      name="characterClass"
                      id="characterClass"
                      placeholder="What class is your character?">
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
                <label htmlFor="Select Level">What level is your character?</label>
                <select className="form-control"
                      id="characterLvl"
                      name ="characterLvl"
                      placeholder="1">
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
                <label htmlFor="Strength">Strength</label>
                <input type="text"
                      className="form-control"
                      name="characterStrength" id="characterStrength"
                      placeholder="What is your character's strength?" />
              </div>
              <div className="form-group">
                <label htmlFor="Dexterity">Dexterity</label>
                <input type="text"
                      className="form-control"
                      name="characterDexterity" id="characterDexterity"
                      placeholder="What is your character's dexterity?" />
              </div>
              <div className="form-group">
                <label htmlFor="Constitution">Constitution</label>
                <input type="text"
                      className="form-control"
                      name="characterConstitution" id="characterConstitution"
                      placeholder="What is your character's constitution?" />
              </div>
              <div className="form-group">
                <label htmlFor="Wisdom">Wisdom</label>
                <input type="text"
                      className="form-control"
                      name="characterWisdom" id="characterWisdom"
                      placeholder="What is your character's wisdom?" />
              </div>
              <div className="form-group">
                <label htmlFor="Intelligence">Intelligence</label>
                <input type="text"
                        className="form-control"
                        name="characterIntelligence" id="characterIntelligence"
                        placeholder="What is your character's intelligence?" />
              </div>
              <div className="form-group">
                <label htmlFor="Charisma">Charisma</label>
                <input type="text"
                      className="form-control"
                      name="characterCharisma" id="characterCharisma"
                      placeholder="What is your character's charisma?" />
              </div>
              <input className="btn btn-primary"
                      name="submit"
                      type="submit"
                      value="Submit" />
            </div>
          </form>
      </div>
    );
  }
}
