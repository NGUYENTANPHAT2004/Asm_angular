import { Component, OnInit  } from '@angular/core';
import { IProduct } from '../components/type/product';
import { typeCategory } from '../components/type/category';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  categories: typeCategory[] = [];
  searchQuery: string = '';
  selectedCategory: string = '';

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.fetchCategories();
    this.fetchProducts();
  }
  fetchCategories(): void {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
  fetchProducts(): void {
    this.productService.Get_All_Products().subscribe(products => {
      this.products = products;
    });
  }
  onCategoryChange(event: Event): void {
    const category = (event.target as HTMLSelectElement).value;
    if (category) {
      this.productService.getProductsByCategory(category).subscribe(products => {
        this.products = products;
      });
    } else {
      this.fetchProducts();
    }
  }

  deleteProduct(id: string): void {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
    if (confirmDelete) {
      this.productService.Delete_Product(id).subscribe(() => {
        this.fetchProducts();
      });
    }
  }
  onSearchChange(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
    this.filterProducts();
  }

  filterProducts(): void {
    this.productService.getFilteredProducts(this.selectedCategory, this.searchQuery).subscribe(products => {
      this.products = products;
    });
  }
}
