import { Component, signal } from '@angular/core';
import { SideBar } from '../shared/side-bar/side-bar';
//import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [SideBar ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
