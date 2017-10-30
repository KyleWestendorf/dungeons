import { combineReducers } from 'redux';
import Strength from './reducer_character_str';
import Dexterity from './reducer_character_dex';
import Constitution from './reducer_character_con';
import Intelligence from './reducer_character_int';
import Wisdom from './reducer_character_wis';
import Charisma from './reducer_character_cha';
import Level from './reducer_character_lvl';
import Name from './reducer_character_name';
import Character from './reducer_character';

const rootReducer = combineReducers({
  strength: Strength,
  dexterity: Dexterity,
  constitution: Constitution,
  intellignece: Intelligence,
  wisdom: Wisdom,
  charisma: Charisma,
  level: Level,
  character: Character,
  name: Name
});

export default rootReducer;
