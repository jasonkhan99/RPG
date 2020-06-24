import { CharacterCreator } from './../src/RPG.js';
// import { StatList } from './../src/RPG.js';

describe('CharacterCreator', () => {

  test('should create a character with user selected input', () => {
    const character = new CharacterCreator("Jason", "hacker");
    expect(character.name).toEqual("Jason");
    expect(character.profile).toEqual("hacker");
    expect(character.inventory).toEqual([]);
    expect(character.stats).toEqual([]);
    expect(character.experience).toEqual(0);
  });
});