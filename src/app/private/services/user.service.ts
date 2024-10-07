import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) { }
  baseUrl = 'http://localhost:8082/api';
  getAllUsers(){
    return this.httpclient.get<user[]>(
     'http://localhost:8082/api/users'
    );
  }


  addUser(user : user){
    return this.httpclient.post(this.baseUrl+'/users', user);
  }

  deleteUser(id: number){
    return this.httpclient.delete(this.baseUrl + '/users/' + id);
  }

  editUser(id:number,user:user){
    return this.httpclient.put(this.baseUrl+'/users/'+id,user);
  }

  getUserById(id:number){
    return this.httpclient.get<user>(this.baseUrl+'/users/'+id);
  }
}
