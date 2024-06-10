import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './components/type/product';
import { typeCategory } from './components/type/category';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}
  getProductsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/products?category=${category}`);
  }
  Get_All_Products = (): Observable<any> => {
    return this.http.get(`${this.apiUrl}/products`);
  }
  getFilteredProducts(category: string, searchQuery: string): Observable<any> {
    let query = `${this.apiUrl}/products?`;
    if (category) {
      query += `category=${category}&`;
    }
    if (searchQuery) {
      query += `name_like=${searchQuery}`;
    }
    return this.http.get(query);
  }

  Get_Product_By_ID = (id: string): Observable<any> => {
    return this.http.get(`${this.apiUrl}/products/${id}`);
  }

  add_Product = (data: IProduct): Observable<any> => {
    const id = this.generateUniqueId();
    const productWithId = { ...data, id };
    return this.http.post(`${this.apiUrl}/products`, productWithId);
  }

  Update_Product = (id: string, data: IProduct): Observable<any> => {
    return this.http.put(`${this.apiUrl}/products/${id}`, data);
  }

  Delete_Product = (id: string): Observable<any> => {
    return this.http.delete(`${this.apiUrl}/products/${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }
  addCategory(category: typeCategory): Observable<any> {
    return this.http.post(`${this.apiUrl}/categories`, category);
  }
  private generateUniqueId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}
