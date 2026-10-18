import { Component, signal } from '@angular/core';
import { SideBar } from '../shared/side-bar/side-bar';
import { FormsModule } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [SideBar,FormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('My First Example');
  isEnabled=true;
  header:string="Rathi Vimala";
  user={
    name:"Rathi",Age:32
  }

  onChange($e:Event){

this.header=($e.target as HTMLInputElement).value;


  }
}
