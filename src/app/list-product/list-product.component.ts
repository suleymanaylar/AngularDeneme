import { Component, OnInit } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ProductService } from '../services/product.service';
import { Product } from '../product/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
  providers:[ProductService]
})
export class ListProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  product: Product [];

  ngOnInit() {
    this.productService.getProduct().subscribe(data => {
      this.product = data;
    });
  }

  columnDefs = [
    {headerName: 'Name', field: 'name' },
    {headerName: 'price', field: 'price' },
    {headerName: 'description', field: 'description'}
];

rowData = this.product
}
