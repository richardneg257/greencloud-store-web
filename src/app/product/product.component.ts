import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product: any = {};

  constructor(private router: ActivatedRoute, private productService: ProductService) {
    router.params.subscribe(data => {
      //console.log('Este es el ID: ' + params['id']);
      this.getProductById(data['id']);
    });
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(data => {
      this.product = data;
    });
  }
}
