import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  produtos: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log(data);
        this.produtos = data;
      },
      (error) => {
        console.log(error)
      }
    );
  }
}
