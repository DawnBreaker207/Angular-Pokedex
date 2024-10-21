import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxModalModule } from '@ngx-lite/modal';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgxNavDrawerModule } from '@ngx-lite/nav-drawer';

const components = [FormSearchComponent, FooterComponent, HeaderComponent];
const modules = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
  NgxNavDrawerModule,
  NgxModalModule,
];
@NgModule({
  imports: [...modules],
  exports: [...components, ...modules],
  declarations: [...components],
})
export class SharedModule {}
