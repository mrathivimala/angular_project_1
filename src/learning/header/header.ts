import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @Input("outer") reciver = "reciever in header component";
  @Input() headeruser!: User;

  @Output() success: EventEmitter<User> = new EventEmitter();

  OnSubmit() {
    console.log("inside emitting")
    if(this.headeruser) this.headeruser.name = "Saravanan"
    this.success.emit(this.headeruser);
  }
} 
