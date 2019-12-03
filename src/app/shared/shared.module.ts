import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { MaterialModule } from '@material/material.module';
import { CartComponent } from './components/cart/cart.component';
import { QuicklinkModule } from 'ngx-quicklink';
import { FibonacciPipe } from './pipes/fibonacci.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    CartComponent,
    FibonacciPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    QuicklinkModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    ExponentialPipe,
    HighlightDirective,
    FibonacciPipe
  ]
})
export class SharedModule { }
