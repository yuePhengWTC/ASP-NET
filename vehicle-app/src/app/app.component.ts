import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vehicle-app';
}
