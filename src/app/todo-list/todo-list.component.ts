import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
id:number=0;
list:any[] = [];
addtolist(item:string){
this.list.push({id:this.list.length, name:item});
console.log("I am added");

}
removeTask(id:number){
console.log("I am removed");
}
}
