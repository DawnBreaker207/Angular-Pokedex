import { Product } from '@/app/types/product/product';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productList = [
    {
      id: 1,
      name: 'A',
      category: 'A',
      price: 10000,
      quantity: 10,
      thumbnail: 'OK',
    },
    {
      id: 2,
      name: 'B',
      category: 'B',
      price: 10000,
      quantity: 10,
      thumbnail: 'OK',
    },
    {
      id: 3,
      name: 'C',
      category: 'C',
      price: 10000,
      quantity: 10,
      thumbnail: 'OK',
    },
    {
      id: 4,
      name: 'D',
      category: 'D',
      price: 10000,
      quantity: 10,
      thumbnail: 'OK',
    },
    {
      id: 5,
      name: 'E',
      category: 'E',
      price: 10000,
      quantity: 10,
      thumbnail: 'OK',
    },
  ];
  // TODO: Understand this
  private productSubject: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >(this.productList);
  // TODO: Understand this
  data: Observable<Product[]> = this.productSubject.asObservable();
  constructor() {}

  getAllProduct(): Observable<Product[]> {
    return this.data;
  }

  deleteProduct(id: string | number | undefined): Observable<void> {
    this.productList = this.productList.filter((product) => product.id !== id);

    this.productSubject.next(this.productList);
    return of(undefined);
  }
}
