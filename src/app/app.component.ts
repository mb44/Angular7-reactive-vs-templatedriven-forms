import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Template driven form
  public username = "";
  public checkout = true;

  onSubmit() {
    console.log(this.username)
    console.log(this.checkout)
  }

  // Reactive form
  fg = new FormGroup({
    username2: new FormControl("", Validators.required),
    checkout2: new FormControl(true)
  })

  onSubmit2() {
    //console.log(this.fg)
    console.log(this.fg.value.username2)
    console.log(this.fg.value.checkout2)
  }
}
