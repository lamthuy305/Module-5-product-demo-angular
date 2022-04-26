import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};

  @Output()
  editEvent = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  submitCreate() {
    this.editEvent.emit(this.product);
  }
}
