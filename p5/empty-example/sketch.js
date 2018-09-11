var input, button, greeting;

function setup() {

  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 30);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'Would you rather...');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
    
}

function greet() {
  var name = input.value();
  greeting.html('goodbye'+name+'!');
  input.value('');
}