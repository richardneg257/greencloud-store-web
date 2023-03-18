import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: any = [];

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((data) => {
        this.products = data;
      });
  }
}
