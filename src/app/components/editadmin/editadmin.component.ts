import { Component } from '@angular/core';
import { ProductsService } from '../../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../type/product';
import { typeCategory } from '../type/category';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrl: './editadmin.component.css'
})
export class EditadminComponent {
  categories: typeCategory[] = []
  selectedCategoryId: number | undefined;

  constructor(private productService:ProductsService,
              private route:ActivatedRoute,
              private categoryService: CategoryService ){}
  productform = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(6)]),
    image: new FormControl(''),
    // cat_id: new FormControl(1),
    price: new FormControl(1000,Validators.min(2000)),
    category : new FormControl('',[Validators.required,])
  })
  productID = this.route.snapshot.params['id']
  ngOnInit(){
      this.productService.Get_Product_By_ID(this.productID)
      .subscribe(data=>{
        console.log(data);
        this.productform.controls.name.setValue(data.name)
        this.productform.controls.image.setValue(data.image)
        this.productform.controls.category.setValue(data.category)
        this.productform.controls.price.setValue(data.price)
      })
      this.loadCategories();
  }
  router = new Router();
  

  loadCategories(): void {
    this.categoryService.Get_Categories().subscribe((data: typeCategory[]) => {
      this.categories = data;
    });
  }
  onSubmit=async () => {
    const productdata = this.productform.value as IProduct
    this.productService.Update_Product(this.productID,productdata).subscribe(data=>{
        alert("Cập nhật thành công")
        this.router.navigate(['admin'])
    })
    // this.productService.add_Product(productdata).subscribe(data=>{
    //     alert('Thêm thành công')
    //     // this.products.push(data)
    // })
  }
}
