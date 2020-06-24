import { CharacterCreator } from './../src/RPG.js';
import { StatList } from './../src/RPG.js';

describe('CharacterCreator', () => {
  const character = new CharacterCreator("Jason", "Hacker");

  test('should create a character with user selected input', () => {
    expect(character.name).toEqual("Jason");
    expect(character.profile).toEqual("Hacker");
    expect(character.inventory).toEqual([]);
    expect(character.stats).toEqual(undefined);
    expect(character.experience).toEqual(0);
  });

  test('should assign an object to character stats', () => {
    character.addStatList();
    expect(character.stats).toEqual({health: 100, defense: 100, strength: 100, speed: 100});
    expect(character.stats.health).toEqual(100);
  });
});

// describe('StatList', () => {

//   test('should assign stats to stat keys', () => {
//     const thugGuy = new StatList(100, 100, 150, 50);
//     expect(thugGuy.health).toEqual(100);
//     expect(thugGuy.defense).toEqual(100);
//     expect(thugGuy.strength).toEqual(150);
//     expect(thugGuy.speed).toEqual(50);
//   });
// });

// describe('CharacterStart', () => {

//   test('should push profile stats to character stats', () => {
//     const character = new CharacterCreator("Jason", "hacker");
//     const hackerTest = new StatList();
//     character.setStartingStats();
//     expect(hackerTest.health).toEqual(100);
//     expect(hackerTest.defense).toEqual(100);
//     expect(hackerTest.strength).toEqual(100);
//     expect(hackerTest.speed).toEqual(100);
//     expect(character.stats).toEqual(100, 100, 100, false);
//   });
// });

