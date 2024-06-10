import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { typeCategory } from './components/type/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  API_URL = 'http://localhost:3000/categories'
  Get_Categories = ():Observable<any>=>{
      return this.http.get(this.API_URL)
  }
  add_category = (data:typeCategory):Observable<any>=>{
    return this.http.post(this.API_URL,data)
  }
}
