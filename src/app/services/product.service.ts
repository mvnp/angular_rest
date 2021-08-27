import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  SERVER_URL = 'https://raw.githubusercontent.com/wedeploy-examples/supermarket-web-example/master/products.json';

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(){
    return this.http.get(`${this.SERVER_URL}`);
  }
}
