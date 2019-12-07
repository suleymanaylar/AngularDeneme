import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from '../product';
import { Category } from 'src/app/category/category';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService:CategoryService) { }
  model:Product=new Product();
  categories:Category[];

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data;
    })
  }

}
