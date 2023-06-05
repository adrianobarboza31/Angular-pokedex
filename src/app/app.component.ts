import { Component, OnInit } from '@angular/core';
import { PokedexService } from './pokedex.service';
import { pokemon } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app';
  constructor(private pokedex:PokedexService){

  }
  cerca:string
  counter:number=0
  array:pokemon[]=[]
  pokemon:pokemon={name:"",url:""}
  onModelloModificato(newvalue:any){
    console.log(newvalue)
    let filtra=this.array.find((element)=>{

    return element.name===newvalue


    })
    let filtro=this.array.find((element)=>{
      return element.name.includes(newvalue)
    })
    if(filtra){
      console.log(filtra)
      this.pokemon=filtra
    }else if(filtro){
   this.pokemon=filtro
    }else{
      this.pokemon={ name: '', url: '' };
    }

    // console.log(this.pokemon)
  }
ngOnInit(): void {
 this.pokedex.getPokemons().subscribe(
  (element)=>{
 let array=element.results
 array.map((ele:any)=>{
  this.counter++
  ele.url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.counter+".png"
 })
 this.array=array
 this.pokemon = this.array[0];
console.log(this.array)
console.log(this.pokemon)
  }
)
}
prev(){
  let indice= this.array.indexOf(this.pokemon)
  this.cerca=""
  console.log(indice)
  if(indice<1){

    this.pokemon=this.array[150]
  }else{
    this.pokemon=this.array[indice-1]
  }


}
next(){
  let indice= this.array.indexOf(this.pokemon)
  this.cerca=""
  console.log(this.array[0])
  if(indice==150){
    this.pokemon=this.array[0]
  }else{
    this.pokemon=this.array[indice+1]
  }

}
}
