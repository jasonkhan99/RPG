import { CharacterCreator } from './../src/RPG.js';
import { StatList } from './../src/RPG.js';

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

describe('StatList', () => {

  test('should assign stats to stat keys', () => {
    const thugGuy = new StatList(100, 100, 150, 50);
    expect(thugGuy.health).toEqual(100);
    expect(thugGuy.defense).toEqual(100);
    expect(thugGuy.strength).toEqual(150);
    expect(thugGuy.speed).toEqual(false);
  });
});