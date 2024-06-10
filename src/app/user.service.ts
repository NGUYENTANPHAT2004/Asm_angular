import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable,BehaviorSubject  } from 'rxjs';
import { IUser } from './components/type/user';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:3000'
  constructor(private http:HttpClient,private router: Router) { }
  RegisterUser = (data:IUser):Observable<any>=>{
    return this.http.post(this.API_URL+'/register', data)
  }
  UserLogin = (data:IUser):Observable<any>=>{
    return this.http.post(this.API_URL+'/login',data)
  }
  CheckUserValid = ():boolean=>{
    const token:string = localStorage.getItem('user') as string
    let check = false
    try {
        if (token!==null){
          const decoded:any = jwtDecode(token);
          if (decoded?.exp > Date.now()/1000){
            check=true
          }
        }
    } catch (error) {

    }
    return check
  }
  logout(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('usernames');
    this.router.navigate(['']);
  }
}
