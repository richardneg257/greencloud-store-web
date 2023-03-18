import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  urlBase: string = 'http://localhost:5199/api/Products';

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get(this.urlBase);
  }

  getProductById(id: number){
    return this.httpClient.get(`${this.urlBase}/${id}`);
  }
}
