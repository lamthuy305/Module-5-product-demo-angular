import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  @Input()
  product: Product = {};

  @Output()
  editEvent = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  submitEdit() {
    this.editEvent.emit(this.product);
  }
}
