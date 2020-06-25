// character creation
export function CharacterCreator(name, profile, inventory, stats) {
  this.name = name;
  this.profile = profile;
  this.inventory = inventory;
  this.stats = stats;
  this.experience = 0;
}

CharacterCreator.prototype.addStatList = function() {
  if (this.profile === "Thug") {
    let thug = new StatList(100, 100, 150, 50);
    this.stats = thug;
  } else if (this.profile === "Hacker") {
    let hacker = new StatList(100, 100, 100, 100);
    this.stats = hacker;
  } else if (this.profile === "Gun Slinger") {
    let gunSlinger = new StatList(100, 50, 100, 150);
    this.stats = gunSlinger;
  }
}

CharacterCreator.prototype.addWeapon = function() {
  if (this.inventory.weapon.includes("Power Fist")) {
    this.stats.strength += 50;
    this.stats.defense -= 50;
  } else if (this.inventory.weapon.includes("Key Board")) {
    this.stats.defense += 50;
    this.stats.speed -= 50;
  } else if (this.inventory.weapon.includes("USB Rifle")) {
    this.stats.speed += 50;
    this.stats.health -= 50;
  }
}  

CharacterCreator.prototype.addArmor = function() {
  if (this.inventory.armor.includes("Old Tire Armor")) {
    this.stats.speed += 50;
    this.stats.defense -= 50;
  } else if (this.inventory.armor.includes("Scrap Metal Armor")) {
    this.stats.health += 50;
    this.stats.speed -= 50;
  } else if (this.inventory.armor.includes("Power Armor")) {
    this.stats.defense += 50;
    this.stats.speed -= 50;
  }
}
// inventory 
export function InventoryEquip(weapon, armor, trinket, consumables) {
  this.weapon = weapon;
  this.armor = armor;
  this.trinket = trinket;
  this.consumables = consumables;
}
// stat list
function StatList(health, defense, strength, speed) {
  this.health = health;
  this.defense = defense;
  this.strength = strength;
  this.speed = speed;
}
