import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './product/products-list/products-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductsEditComponent } from './product/products-edit/products-edit.component';
import {FormsModule} from '@angular/forms';
import { ProductsDeleteComponent } from './product/products-delete/products-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCreateComponent,
    ProductsEditComponent,
    ProductsDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
