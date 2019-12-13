import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }

  //Methode soumission formulaire
  onForm() {
    const myInfo = `My name is ${this.name}. This is my mail ${this.email}.You can read my message ${this.message}`
    alert(myInfo);
  }
}
