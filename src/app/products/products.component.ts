import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: any = [];

  constructor(private productService: ProductService, private router: Router) {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts()
      .subscribe((data) => {
        this.products = data;
      });
  }

  showDetail(id: number){
    this.router.navigate(['/products', id]);
  }
}
