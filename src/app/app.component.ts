import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CrudPracticeComponent } from './CrudOperationsWithLocalStorage/crud-practice/crud-practice.component'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CrudPracticeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Project';
}
