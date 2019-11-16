import { Component } from '@angular/core';
import { CartService } from '@core/services/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  totalProducts$: Observable<string>;
  
  constructor(private cartService: CartService) { 
    this.totalProducts$ = this.cartService.cart$.pipe(map(products => products.length.toString()));
  }
}
