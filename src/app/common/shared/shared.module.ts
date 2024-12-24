import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

const components = [
  FormSearchComponent,
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
];
const modules = [
  CommonModule,
  ReactiveFormsModule,
  RouterModule,
  MatDialogModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatListModule,
];
@NgModule({
  imports: [...modules],
  exports: [...components, ...modules],
  declarations: [...components],
})
export class SharedModule {}
