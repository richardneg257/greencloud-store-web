import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  constructor(private router: ActivatedRoute) {
    router.params.subscribe(params => {
      console.log('Este es el ID: ' + params['id']);
    });
  }

}
