import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-notes',
  imports: [RouterOutlet, FormsModule, JsonPipe],
  templateUrl: './notes.html',
  styleUrl: './notes.css',
})
export class Notes implements OnInit, AfterViewInit {

  empName = "";
  @ViewChild('detailForm') detailForm: NgForm | undefined = undefined;
  details = {
    name: "", age: 0, gender: "m"
  }
  ngOnInit(): void {
    console.log("Details :" + this.detailForm?.value);
  }
 
  ngAfterViewInit(): void {
    setInterval(() => {
      console.log("ngAfterViewInit :" + this.detailForm?.dirty);
    }, 2000);

  }
   OnFormSubmit(form: NgForm) {
    console.log(form)
    form.reset();
  }
}

