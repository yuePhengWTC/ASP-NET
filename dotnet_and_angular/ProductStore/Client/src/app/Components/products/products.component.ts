import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  private _productService = inject(ProductService);

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe((res)=>{
      console.log(res);
    });
  }

}
