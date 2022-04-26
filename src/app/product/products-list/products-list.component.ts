import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  constructor() {
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Iphone',
      price: 20000,
      description: 'new'
    },
    {
      id: 2,
      name: 'Samsung',
      price: 150000,
      description: 'new'
    },
    {
      id: 3,
      name: 'Huawei',
      price: 10000,
      description: 'new'
    }
  ];

  isShowEditForm = false;

  isShowDeleteForm = false;

  isShowCreateForm = false;

  isShowList = true;

  currentProduct: Product = {};

  ngOnInit() {
  }

  showFormCreate() {
    this.isShowCreateForm = !this.isShowCreateForm;
  }

  showFormDelete(product) {
    this.isShowDeleteForm = !this.isShowDeleteForm;
    this.currentProduct = product;
  }

  showFormEdit(product) {
    this.isShowEditForm = !this.isShowEditForm;
    this.currentProduct = product;

  }

  changeShowList() {
    this.isShowList = !this.isShowList;
  }

  editProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        index = i;
        break;
      }
    }
    this.products[index] = product;
    this.isShowEditForm = !this.isShowEditForm;
    this.changeShowList();

  }

  deleteProduct(product) {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == product.id) {
        index = i;
        break;
      }
    }
    let newProducts: Product[] = [];
    for (let i = 0; i < this.products.length; i++) {
      if (i < index) {
        newProducts.push(this.products[i]);
      }
      if (i > index) {
        newProducts.push(this.products[i]);
      }
    }
    this.products = newProducts;
    this.isShowDeleteForm = !this.isShowDeleteForm;
    this.changeShowList();
  }

  createProduct(product) {
    this.products.push(product);
    this.isShowCreateForm = !this.isShowCreateForm;
    this.changeShowList();
  }
}
