import { Component, OnInit } from '@angular/core';
//Je souscris au service, je l'appel car j'en ai besoin dans ce component
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users; //possibilité de faire un modele (interface/ class)
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
