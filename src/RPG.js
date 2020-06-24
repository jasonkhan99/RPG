// character creation
export function CharacterCreator(name, profile, inventory, stats) {
  this.name = name;
  this.profile = profile;
  this.inventory = [];
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

CharacterCreator.prototype.addInventory = function() {
  if (this.inventory.includes("Power Fist")) {
    this.stats.strength += 50;
    this.stats.defense -= 50;
    this.inventory.push("Power Fist");
  } else if (this.inventory.includes("Key Board")) {
    this.stats.defense += 50;
    this.stats.speed -= 50;
    this.inventory.push("Key Board");
  } else if (this.inventory.includes("USB Rifle")) {
    this.stats.speed += 50;
    this.stats.health -= 50;
    this.inventory.push("USB Rifle");
  } else if (this.inventory.includes("Old Tire Armor")) {
    this.stats.speed += 50;
    this.stats.defense -= 50;
    this.inventory.push("Old Tire Armor");
  } else if (this.inventory.includes("Scrap Metal Armor")) {
    this.stats.health += 50;
    this.stats.speed -= 50;
    this.inventory.push("Scrap Metal Armor");
  } else if (this.inventory.includes("Power Armor")) {
    this.stats.defense +=50;
    this.stats.speed -=50;
    this.inventory.push("Power Armor");
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
