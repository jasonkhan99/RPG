let statlist = new StatList;
let inventoryEquip = new InventoryEquip;
let characterCreator = new CharacterCreator;

function CharacterCreator(name, profile, inventory, stats, experience) {
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

function StatList(health, defense, strength, speed) {
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
    StatList.push(thug)
  } else if (this.profile === hacker) {
    StatList.push(hacker)
  } else (this.profile === gunSlinger) {
    StatList.push(gunSlinger)
  } 
}