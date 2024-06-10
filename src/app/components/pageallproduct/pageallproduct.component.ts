import { Component,OnInit } from '@angular/core';
import { IProduct } from '../type/product';
import { typeCategory } from '../type/category';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-pageallproduct',
  templateUrl: './pageallproduct.component.html',
  styleUrl: './pageallproduct.component.css'
})
export class PageallproductComponent implements OnInit {
  constructor(private productservice:ProductsService){}
  product : IProduct[] =[];
  categories: typeCategory[] = [];
  selectedCategory: string = '';
  ngOnInit(): void {
   this.fetchProducts();
   this.fetchCategories();
  }
  fetchCategories(): void {
    this.productservice.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  fetchProducts(): void {
    this.productservice.Get_All_Products().subscribe(products => {
      this.product = products;
    });
  }
  onCategoryChange(event: Event): void {
    const category = (event.target as HTMLSelectElement).value;
    if (category) {
      this.productservice.getProductsByCategory(category).subscribe(products => {
        this.product = products;
      });
    } else {
      this.fetchProducts();
    }
  }
}
