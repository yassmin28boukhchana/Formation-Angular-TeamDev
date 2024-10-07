import { Component, OnInit } from '@angular/core';
import { user } from '../../model/user';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userList: user[] = [];
constructor(private userService : UserService){}
ngOnInit(): void {
  this.displayUsers();
}

displayUsers() {
  // subscribe bsh tokood tfollowi fl methode heki lin tjib resultat nn
  this.userService.getAllUsers().subscribe((res) => {
    this.userList = res;
    console.log(res);
  });
}

selectedUser!: user;
selectUser(user: any) {
  this.selectedUser = user;
}
deleteUser() {
  if(this.selectedUser.id){this.userService
    .deleteUser(this.selectedUser.id)
    .subscribe((res) => {
      console.log(res);
      this.displayUsers();
    });}
}



}
