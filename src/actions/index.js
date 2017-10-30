export const FETCH_CHARACTER = 'fetch_character';

export function fetchCharacter() {
  const character = "Nathaniel Darkeson"
  return {
    type: FETCH_CHARACTER,
    payload: character
  };
}
