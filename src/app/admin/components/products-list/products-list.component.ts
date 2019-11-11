import { ProductsService } from 'src/app/core/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(products => this.products = products);
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(resp => {
      if (resp) {
        this.products = this.products.filter(product => product.id !== id);
      }
    });
  }
}