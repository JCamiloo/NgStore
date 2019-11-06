import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    
    @Input() product: any;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart() {
        this.productClicked.emit(this.product.price)
    }
}