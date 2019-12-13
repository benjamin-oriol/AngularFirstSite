import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Mon HttpClient va me permet d'intérroger une API extérieure
@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Je def. la constante de l'API que je veux
  apiUrl = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  //Methode qui me retourne l'Api pour resortir les users
  getUsers() { 
    return this.http.get(`${this.apiUrl}?per_page=10`)
  }

  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`)
  }
}
