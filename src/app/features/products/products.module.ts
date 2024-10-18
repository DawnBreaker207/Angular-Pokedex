import { ProductsService } from '@/app/core/services/products.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [ProductsService],
})
export class ProductsModule {}
