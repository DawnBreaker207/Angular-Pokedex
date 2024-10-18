import { ProductsService } from '@/app/core/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  constructor(private service: ProductsService) {}

  products$ = this.service.getAllProduct();

  displayColumns: string[] = [
    'id',
    'name',
    'thumbnail',
    'price',
    'category',
    'quantity',
    'action',
  ];

  deleProduct(id: string | number | undefined) {
    this.service.deleteProduct(id);
  }
}
