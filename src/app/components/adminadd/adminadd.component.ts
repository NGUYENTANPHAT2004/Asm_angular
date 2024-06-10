import { Component } from '@angular/core';
import { IProduct } from '../type/product';
import { ProductsService } from '../../products.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../category.service';
import { typeCategory } from '../type/category';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrl: './adminadd.component.css'
})
export class AdminaddComponent {
  products:IProduct[] = []
  categories: typeCategory[] = []
  selectedCategoryId: number | undefined;
  constructor(
    private productService:ProductsService,
    private categoryService: CategoryService
  ){}
  productform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    image: new FormControl('',[Validators.required,]),
    // cat_id: new FormControl(1),
    price: new FormControl(1000,Validators.min(2000)),
    category : new FormControl('',[Validators.required,])
    
  })
  
  router = new Router()
  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categoryService.Get_Categories().subscribe((data: typeCategory[]) => {
      this.categories = data;
    });
  }
   onSubmit=async () => {
    const productdata = this.productform.value as IProduct
    this.productService.add_Product(productdata).subscribe(data=>{
        alert('Thêm thành công')
        this.router.navigate(['admin'])
    })
    
  }
  
}

