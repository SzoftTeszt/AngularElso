import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ElsoAngular';
  sajat  ="Nyuszika"
  tomb =["Attila", "András", "Laura", "Zsuzsi"]

  newFruit:any={}

  oszlopok:any=
  [
    {key:"id", text:"#", type:"plain"},
    {key:"name", text:"Név", type:"text"},
    {key:"price", text:"Ár", type:"number"},
  ]

  adat:any= [
    {id:1, name:"Körte", price:2000},
    {id:2, name:"Alma", price:1500},
    {id:3, name:"Szilva", price:3000},
  ]

  torles(gyumi:any){
      this.adat=this.adat.filter(
        (gyumolcs:any)=> gyumolcs != gyumi 
      )
  }

  hozzaadas(){
    this.newFruit.id=10
    this.adat.push(this.newFruit)
    this.newFruit={}
  }
}
