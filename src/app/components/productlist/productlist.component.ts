
import { Component, OnInit  } from '@angular/core';
import { IProduct } from '../type/product';
import axios from 'axios';
import { ProductsService } from '../../products.service';
import { SearchService } from '../../search.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductsService,private searchService:SearchService) {}

        ngOnInit(): void {
          this.fetchProducts();
          this.search();
        }
        fetchProducts(): void {
          this.productService.Get_All_Products().subscribe(products => {
            this.products = products;
          });
        }
        search() : void {
          this.searchService.searchResults$.subscribe(products => {
            this.products = products;
          });
        }
}
