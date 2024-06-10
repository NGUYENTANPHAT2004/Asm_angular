import { Component,OnInit } from '@angular/core';
import { typeMenu } from '../type/typeMenu';
import { ProductsService } from '../../products.service';
import { IProduct } from '../type/product';
import { SearchService } from '../../search.service';
import { UserService } from '../../user.service';
import { jwtDecode } from 'jwt-decode';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit  {
    products: IProduct[] = [];
    Menu : typeMenu[] = [
      {
        id: 1 ,
        name: "Home",
        path : ''
      },
      {
        id: 2 ,
        name: "Catalog",
        path : 'product'
      }
    ]
    searchQuery: string = '';
    selectedCategory: string = '';
    userName: string = '';
    constructor(private productService: ProductsService,private searchService:SearchService,private userservice :UserService) {}

    ngOnInit(): void {
        this.fetchProducts();
        this.checkLoggedInStatus();
    }
    fetchProducts(): void {
      this.productService.Get_All_Products().subscribe(products => {
        this.products = products;
      });
    }
    checkLoggedInStatus(): void {
      const userToken = localStorage.getItem('usernames');
      if (userToken) {
          this.userName = userToken;
      }
    }

    onSearchChange(event: Event): void {
      this.searchQuery = (event.target as HTMLInputElement).value;
      this.filterProducts();
    }
    filterProducts(): void {
      this.productService.getFilteredProducts(this.selectedCategory, this.searchQuery).subscribe(products => {
        this.products = products;
        console.log(this.products);
        this.searchService.setSearchResults(products);
      });
    }
    logout(): void {
      this.userservice.logout();
    }
}
