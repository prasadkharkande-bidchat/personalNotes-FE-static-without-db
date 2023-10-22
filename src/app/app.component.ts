import { Component } from '@angular/core';
import {notes} from "./notes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes-app';
  
  noteValue!:string;
  noteDescription!: string;
  list!: notes[];
  
  ngOnInit(){
    this.list = [];
    this.noteValue = "";
    this.noteDescription = "";
  }

  addItem(){
    if(this.noteValue != ""){
      const newNote: notes = {
        id: Date.now(),
        title: this.noteValue,
        value: this.noteDescription,
        isDone: false
      }

      this.list.push(newNote);
      console.log("-=-=-= newNote: ", newNote)
      console.log(this.list)
    }

    this.noteValue = "";
    this.noteDescription = ""
  }

  deleteItem(id:number){
    this.list = this.list.filter(item => {
      item.id != id
    })
  }

  updateItem(id:number, newValue:string){
    this.list.forEach(element => {
      if(element.id == id)
      element.value = newValue;
    });
  }

}




