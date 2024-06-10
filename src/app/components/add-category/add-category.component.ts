import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { typeCategory } from '../type/category';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {
  categoryfoooo:typeCategory[] = []
  constructor(
    private Category:CategoryService,
  ){}
  Categoryform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  
  router = new Router()
  
   onSubmit=async () => {
    const categorydata = this.Categoryform.value as typeCategory
    this.Category.add_category(categorydata).subscribe(data=>{
        alert('Thêm thành công')
        this.router.navigate(['admin'])
    })
    
  }
}
