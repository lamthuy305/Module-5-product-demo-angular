import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-products-delete',
  templateUrl: './products-delete.component.html',
  styleUrls: ['./products-delete.component.css']
})
export class ProductsDeleteComponent implements OnInit {
  @Input()
  product: Product = {};

  @Output()
  editEvent = new EventEmitter<Product>();

  constructor() {
  }

  ngOnInit() {
  }

  submitDelete() {
    this.editEvent.emit(this.product);
  }
}
