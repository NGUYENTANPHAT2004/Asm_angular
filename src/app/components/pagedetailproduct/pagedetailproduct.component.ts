import { Component,OnInit } from '@angular/core';
import { IProduct } from '../type/product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../products.service';
@Component({
  selector: 'app-pagedetailproduct',
  templateUrl: './pagedetailproduct.component.html',
  styleUrl: './pagedetailproduct.component.css'
})
export class PagedetailproductComponent implements OnInit {
  product?: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.Get_Product_By_ID(id).subscribe(product => {
        this.product = product;
      });
    }
  }

}
