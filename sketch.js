//by Valve


let zdj1
let zdj2
let zdj3
let zdj4
let zdj5
let zdj6
let zdj7
let zdj8
let zdj9
let zdj10
let click
let tak = true;
let tablica = [0,0]
let pary=0;
let karty = [0,0,0,0,0,0,0,0,0]
let lista=[]
let muzyka

function preload(){
  zdj1= loadImage("Astra.jpg")
  zdj2= loadImage("Brimstone.jpg")
  zdj3= loadImage("Chamber.jpg")
  zdj4= loadImage("Reyna.jpg")
  zdj5= loadImage("Sage.jpg")
  zdj6= loadImage("phonix.jpg")
  zdj8= loadImage("raze.jpg");
  zdj9= loadImage("valorant.jpg");
  muzyka=loadSound("muzyka.mp3")
  zdj10 = [[zdj1,2],[zdj2,2],[zdj3,2],[zdj4,2],[zdj5,2],[zdj6,2],[zdj8,2],[zdj9,1]];
}


function setup() {
  createCanvas(821, 600);
  
  do{
    x = floor(random(0,8));
  }
  while(zdj10[x][1] == 0){
  zdj10[x][1]--;
  karty[0]=new karta(5,5,0,zdj10[x][0]);//
  }
  do{
    x = floor(random(0,8));
  }
  while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[1]=new karta(170,5,1,zdj10[x][0]);//
    }
  
  do{
    x = floor(random(0,8));
  }
  while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[2]=new karta(5,210,2,zdj10[x][0]);//
    }
  
  do{
    x = floor(random(0,8));
  }
  while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[3]=new karta(170,210,3,zdj10[x][0]);//
    }
  
  do{  
    x = floor(random(0,8));
  }
  while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[4]=new karta(335,5,4,zdj10[x][0]);//
    }
  
  do{
    x = floor(random(0,8));
  }while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[5]=new karta(335,210,5,zdj10[x][0]);//
    }
      
  do{
    x = floor(random(0,8));
  }while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[6]=new karta(5,412.5,6,zdj10[x][0]);//
    }
     
  do{
    x = floor(random(0,8));
  }while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[7]=new karta(170,412,7,zdj10[x][0]);//
    }
        
  do{
    x = floor(random(0,8));
  }while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[8]=new karta(335,412.5,8,zdj10[x][0]);//
    }
      
  do{
    x = floor(random(0,8));
  }while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[9]=new karta(500,412.5,9,zdj10[x][0]);
    }
      
  do{
    x = floor(random(0,8));
  }while(zdj10[x][1] == 0){
    
  zdj10[x][1]--;
  
  karty[10]=new karta(500,210,10,zdj10[x][0]);
    }
   
  do{
    x = floor(random(0,8));
  }while(zdj10[x][1] == 0){
  zdj10[x][1]--;
  karty[11]=new karta(500,5,11,zdj10[x][0]);
    }
  
  do{
    x = floor(random(0,8));
  }
  while(zdj10[x][1] == 0){ 
  zdj10[x][1]--;
  karty[12]=new karta(665,5,12,zdj10[x][0]);
  }
  
  do{
    x = floor(random(0,8));
  }
  while(zdj10[x][1] == 0){
  zdj10[x][1]--;
  karty[13]=new karta(665,210,13,zdj10[x][0]);
  }
  
  do{
    x = floor(random(0,8));
  }
  while(zdj10[x][1] == 0){
  zdj10[x][1]--;
  karty[14]=new karta(665,412,14,zdj10[x][0]);
  }
   muzyka.play();
}
function draw() {
  background(0)
  if(pary<8){
  for(let y in karty){
    karty[y].display()
  }
  if(mouseIsPressed){
    click = true;
  }
  else{
    click = false;
  }
  
  
  }
   
}

function wpisz(w1,w2){
  if(tablica[0] == 0){
    tablica[0] = [w1,w2]
    karty[w1].pokaz = true;
  }else if(tablica[1] == 0){
    tablica[1] = [w1,w2]
    karty[w1].pokaz = true;
  }
  
  if(w2==zdj9){
    if(tablica[0][1] !== zdj9){
    karty[tablica[0][0]].pokaz = false
  }
    tablica[0] = [w1,w2]
    tablica[1] = [w1,w2]
    lista=[]
    for(let x in karty){
      if(karty[x].pokaz == false){
      karty[x].pokaz = true;
      lista.push(x)
      }
    }
  }
  
  if(tablica[1] !== 0){
    
    tak = false;
    setTimeout(() =>{
      
      tak = true;
      
      if(tablica[0][1] == zdj9){
        for(let x of lista){
           karty[x].pokaz = false;
        }
      }
      if(tablica[0][1] !== tablica[1][1]){
        karty[tablica[0][0]].pokaz = false;
        karty[tablica[1][0]].pokaz = false;
      }else if(tablica[0][1] !== zdj9){
        pary++;
      }
      
      
      tablica = [0,0]
      console.log("Znalezione pary:"+pary)
    },800);
  }
}