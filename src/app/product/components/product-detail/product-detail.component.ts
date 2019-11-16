import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/services/products.service';
import { Product } from '@core/models/product.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.product$ = this.route.params.pipe(switchMap((params: Params) => {
      return this.productsService.getProduct(params.id);
    }));
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo producto',
      image: 'assets/images/banner-1.jpg',
      price: 30000,
      description: 'creado desde angular'
    };
    this.productsService.createProduct(newProduct).subscribe(product => console.log(product));
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 50000,
      title: 'Producto editado',
    };
    this.productsService.updateProduct('2', updateProduct).subscribe(product => console.log(product));
  }

  deleteProduct() {
    this.productsService.deleteProduct('12').subscribe(rta => console.log(rta));
  }
}
