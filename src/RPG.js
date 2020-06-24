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