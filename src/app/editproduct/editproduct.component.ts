import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../product.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Product} from "../product";
import {CategoryService} from "../category.service";
import {Category} from "../category";

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  product: Product = {
    id: 0,
    name: "name",
    createDate: null,
    description: "Mo ta",
    category: {
      id: 0,
      name: '',
      description: ''
    }
  };
  categories: Category[] = []
  id: number;
  sub: Subscription;

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private router: Router, private activatedRoute: ActivatedRoute) {
    this.sub = this.activatedRoute.paramMap.subscribe( (paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    })
    this.getAllCategories();
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.product.id, this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(categories => {
      this.categories = categories;
    });
  }

}
