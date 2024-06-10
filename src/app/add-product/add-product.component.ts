import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { typeCategory } from '../components/type/category';
import { IProduct } from '../components/type/product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  categories: typeCategory[] = [];
  products:IProduct[] = []

  constructor(
    private fb: FormBuilder,
    private productService: ProductsService,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      desc: ['', Validators.required],
      image : ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productdata : IProduct = this.productForm.value as IProduct ;
      this.productService.add_Product(productdata).subscribe(data=>{
        alert('Thêm thành công')
        this.products.push(data)
        this.router.navigate(['/admin'])
        window.location.reload();
    })
    }
  }
}
