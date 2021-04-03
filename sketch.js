var  database;


function setup(){
  createCanvas(400,400);

  database = firebase.database();
  console.log(database);
  
  game=new Game() 
  game.getState()
  game.start()

  
}

function draw(){
  background("white");
  
    
}

