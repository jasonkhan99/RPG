let statlist = new StatList;
let inventoryEquip = new InventoryEquip;
let characterCreator = new CharacterCreator;

export function CharacterCreator(name, profile, inventory, stats, experience) {
  this.name = name;
  this.profile = profile;
  this.inventory = [];
  this.stats = [];
  this.experience = 0;
}

function InventoryEquip(armor, weapon, trinket, consumables) {
  this.armor = armor;
  this.weapon = weapon;
  this.trinket = trinket;
  this.consumables = consumables;
}

export function StatList(health, defense, strength, speed) {
  this.health = health;
  this.defense = defense;
  this.strength = strength;
  this.speed = speed;
}

StatList.prototype.CharacterStart = function(stats) {
  let thug = (100, 100, 150, 50)
  let hacker = (100, 100, 100, 100)
  let gunSlinger = (100, 50, 100, 150)
  if (this.profile === thug) {
    statList.push(thug);
  } else if (this.profile === hacker) {
    statList.push(hacker);
  } else if (this.profile === gunSlinger) {
    statList.push(gunSlinger);
  } 
}