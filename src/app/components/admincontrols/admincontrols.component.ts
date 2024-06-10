import { Component } from '@angular/core';
import { IProduct } from '../type/product';
import axios from 'axios';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-admincontrols',
  templateUrl: './admincontrols.component.html',
  styleUrl: './admincontrols.component.css'
})
export class AdmincontrolsComponent {
    listProduct : IProduct[] = []
    async ngOnInit() {
      const {data} = await axios.get('http://localhost:3000/products')
      this.listProduct = data
    }


    constructor(private productService: ProductsService) { }

    onDelete= (id: any) => {
      const confirm = window.confirm('Bạn chắc chắn muốn xóa !!!!')
      if(confirm) {
        this.productService.Delete_Product(id).subscribe(
          () => {
              alert('Product deleted successfully !!!')
              window.location.reload();
          },
          error => {
            console.error('Error deleting product:', error);
          }
        );
      }
    }
}
