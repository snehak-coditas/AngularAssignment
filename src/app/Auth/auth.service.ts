import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  getUsers(data) {
    return this.httpclient.get('http://localhost:8080/api/search-users?search=' + data);
    // return this.httpclient.get('https://api.github.com/search/users?q=' + data);
   


  }
 getDetails(username){
   return this.httpclient.get('https://api.github.com/users/'+username+'/repos');
 }

}
