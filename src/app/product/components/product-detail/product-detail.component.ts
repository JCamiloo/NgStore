import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products.service';
import { Product } from 'src/app/core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product:Product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((data: Params) => {
      const id = data.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id).subscribe(product => this.product = product);
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
