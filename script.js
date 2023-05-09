$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;
let fungusHP = 100;
let humanAP = 100;
let hp = 0;
let ap = 0;

function onReady() {
  $(".attack-btn").on("click", attackButton);
} //end of onReady

function attackButton() {
  if ($(this).hasClass("arcane-scepter")) {
    // fungusHP - 14
    fungusHP -= 86;
    // humanAP - 12
    humanAP -= 88;
  } //end of arcane scepter class

  if ($(this).hasClass("entangle")) {
    // fungusHP - 9
    fungusHP -= 91;
    //humanAP - 23
    humanAP -= 77;
  } //end of entangle class

  if ($(this).hasClass("dragon-blade")) {
    fungusHp -= 47;
    // {fungusHP = 53;
    //humanAP - 38
    humanAP -= 62;
  } //end of dragon-blade class

  if ($(this).hasClass("star-fire")) {
    //fungusHp -25
    fungusHP -= 75;
    //humanAP - 33
    humanAP -= 67;
  } //end of dragon-blade class
} //end of attack button function

function arcaneScepter(event) {
  event.preventDefault();

  $("#arcane-scepter").on("click", arcaneScepterAttack);

  // $( this ).css(.attack)
} //end of arcane Scepter

function arcaneScepterAttack() {
  //i want the hp meter to go down by 14 points
  //.hp meter
  //so does the hp text change by - 14
  //i need the ap meter to go down by 12 points
} //end of arcane Scepter attack

function render() {
  $(".ap-text").text(`${humanAP} AP `);
  $(".hp-text").text(`${fungusHP} HP`);
} //end of render

render();

function updateProgress() {
  $("#ap-meter").val(`${AP}`);
  $("#hp-meter").val(`${fungusHP}`);
} //end of updateProgress

// Make sure you check the index.html file!
// There are lots of buttons and things ready for you to hook into here!

// 🧠 Remember
// - Handle events that ->
// - Updates state which is ->
// - Rendered to the DOM