import { Component, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Header } from '../learning/header/header';
import { SideBar } from '../shared/components/side-bar/side-bar';
import { User } from '../shared/models/user.model';

import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [SideBar, FormsModule,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My First Example');

  heading="header from main app";

  user:User={
    name:"Rathi",gender:"female",age:33
  }
  
 Onsuccess($e:User)
 
 {
alert("is happend"+ $e.name)
 }
}
