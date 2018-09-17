var input, button, greeting;

function setup() {

  // create canvas
  createCanvas(900, 900);

  input = createInput();
  input.position(500, 65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);
//im making a note to myself
    
  greeting = createElement('h2', 'What would you like to do?');
  greeting.position(500, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  var name = input.value();
  greeting.html('You would like to '+name+'!');
  input.value('');
}

/*
var button;
function setup() {
  createCanvas(100, 100);
  background(0);
  button = createButton('click me');
  button.position(400, 400);
  button.mousePressed(changeBG);
}
*/

function changeBG() {
  var val = random(255);
  background(val);
}