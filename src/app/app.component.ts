import { Component } from '@angular/core';
declare let Email: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-lifecycle';
  value = "";
  welcome = "Welcome message";
  hidechild = false;

  sendMessage() {
    this.welcome = this.value;
  }

  destroy() {
    this.hidechild = true;
  }

  sendMail() {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'gatadeabhijit@gmail.com',
      Password: '7E7FB890C3690CF202363A92B253FCBD0538',
      To: 'apgatade@gmail.com',
      From: `gatadeabhijit@gmail.com`,
      Subject: 'Trial Mail',
      Body: 'Hello Abhijit Gatade'
    }).then((message: any) => { console.log(message) });
  }
}
