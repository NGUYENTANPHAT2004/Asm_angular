import { Component, Input } from '@angular/core';
import { IProduct } from '../type/product';

@Component({
  selector: 'app-productone',
  templateUrl: './productone.component.html',
  styleUrl: './productone.component.css'
})
export class ProductoneComponent {
    @Input() productone : IProduct = {} as IProduct
}
