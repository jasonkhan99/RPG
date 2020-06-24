import { CharacterCreator } from './../src/RPG.js';

describe('CharacterCreator', () => {
  const character = new CharacterCreator("Jason", "Gun Slinger");

  test('should create a character with user selected input', () => {
    expect(character.name).toEqual("Jason");
    expect(character.profile).toEqual("Gun Slinger");
    expect(character.inventory).toEqual([]);
    expect(character.stats).toEqual(undefined);
    expect(character.experience).toEqual(0);
  });

  test('should assign an object to character stats', () => {
    character.addStatList();
    expect(character.stats.health).toEqual(100);
    expect(character.stats.defense).toEqual(50);
    expect(character.stats.strength).toEqual(100);
  });

  test('should push items to inventory array and update stats', () => {
    character.addInventory();
    expect(character.inventory).toEqual(["Power Fist", "Old Tire Armor"]);
    expect(character.stats.strength).toEqual(150);
    expect(character.stats.defense).toEqual(0);
    expect(character.stats.health).toEqual(100);
    expect(character.stats.speed).toEqual(150);
  });
});
