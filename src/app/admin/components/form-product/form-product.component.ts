import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { ProductsService } from './../../../core/services/products.service';
import { Router } from '@angular/router';
import { MyValidators } from './../../../utils/validators';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor( private formBuilder: FormBuilder, 
               private productsService: ProductsService,
               private router: Router,
               private afStorage: AngularFireStorage) { 
    this.buildForm();
  }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.productsService.createProduct(this.form.value).subscribe(resp => {
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

  uploadFile(event) {
    console.log(event)
    const file: File = event.target.files[0];
    const fileName = file.name;
    const fileRef = this.afStorage.ref(fileName);
    const task = this.afStorage.upload(fileName, file);
    task.snapshotChanges().pipe(finalize(() => {
      this.image$ = fileRef.getDownloadURL(); 
      this.image$.subscribe(url => {
        this.form.get('image').setValue(url);
      });
    })).subscribe();
  }
  
  get priceField() {
    return this.form.get('price');
  }
}