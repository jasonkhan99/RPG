import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { CharacterCreator, InventoryEquip } from './RPG';

$(document).ready(function () {
  $('form#character-creation').submit(function(event) {
    event.preventDefault();
    let inputtedName = $("#name").val();
    let inputtedProfile = $("#profile").val();
    let inputtedWeapon = $("#weapon").val();
    let inputtedArmor = $("#armor").val();
    let experience = 0;
    const characterInventory = new InventoryEquip(inputtedWeapon, inputtedArmor);
    const character = new CharacterCreator(inputtedName, inputtedProfile, characterInventory, experience);
    character.addStatList();
    character.addInventory();
    console.log(character);
    console.log(characterInventory);
  });
});