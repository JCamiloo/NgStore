import { MyValidators } from './../../../utils/validators';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../../core/services/products.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor( private formBuilder: FormBuilder, 
               private productsService: ProductsService,
               private router: Router,
               private activeRoute: ActivatedRoute) { 
    this.buildForm();
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService.updateProduct(this.id, this.form.value).subscribe(resp => {
        this.router.navigate(['./admin/products']);
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }
  
  get priceField() {
    return this.form.get('price');
  }
}
