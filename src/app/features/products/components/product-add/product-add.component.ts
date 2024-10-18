import { ProductService } from '@/app/api/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  constructor(private service: ProductService) {}
}
