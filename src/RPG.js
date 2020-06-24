let statList = new StatList;
let inventoryEquip = new InventoryEquip;
let characterCreator = new CharacterCreator;

// character creation
export function CharacterCreator(name, profile, inventory, stats, experience) {
  this.name = name;
  this.profile = profile;
  this.inventory = [];
  this.stats = stats;
  this.experience = 0;
}

// CharacterCreator.prototype.addProfile = function(type) {
//   if(this.profile === thug) {
//     this.profile = "Thug";
//   } else if (this.profile === hacker) {
//     this.profile = "Hacker";
//   } else if (this.profile === gunSlinger) {
//     this.profile = "Gun Slinger";
//   }
// }

CharacterCreator.prototype.addStatList = function(statValue) {
  if (this.profile === "Hacker") {
    let hacker = new StatList(100, 100, 100, 100);
    this.stats = hacker
  }
  // let thug = (100, 100, 150, 50)
  // let hacker = (100, 100, 100, 100)
  // let gunSlinger = (100, 50, 100, 150)
  // this.stats.push(statList)
}

// inventory 
function InventoryEquip(armor, weapon, trinket, consumables) {
  this.armor = armor;
  this.weapon = weapon;
  this.trinket = trinket;
  this.consumables = consumables;
}
// stat list
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
  if (characterCreator.profile === "thug") {
    statlist.push(thug);
  } else if (characterCreator.profile === "hacker") {
    statlist.push(hacker);
  } else if (characterCreator.profile === "gunSlinger") {
    statlist.push(gunSlinger);
  } 
}