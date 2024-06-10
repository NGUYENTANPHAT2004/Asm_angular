import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { typeCategory } from '../components/type/category';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductsService,private router: Router) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      const category: typeCategory = this.categoryForm.value;
      this.productService.addCategory(category).subscribe(() => {
           alert('Thêm thành công');
           this.router.navigate(['/admin'])
           window.location.reload();
      });
    }
  }
}
