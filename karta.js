class karta{ 
  constructor(x,y,id,karta){
    this.karta=karta;
    this.id=id;
    this.pokaz=false;
    this.x = x;
    this.y = y; 
  }
  
  niggr(){
    if(mouseX>this.x && mouseX<this.x+150 && mouseY>this.y && mouseY<this.y+185){
    return true;
    }
  }
  
  display(){
      if(!this.pokaz){
        fill("white")
        rect(this.x,this.y,150,185);
        if(mouseIsPressed && !click && this.niggr() && tak && tablica[0][0] !==this.id && tablica[0][1] !==this.id){          
          wpisz(this.id,this.karta); 
        }        
      }
      else{
        image(this.karta,this.x,this.y,150,185);
      }
  }
  
  
  
}