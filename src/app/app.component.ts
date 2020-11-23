import { Component } from '@angular/core';
import { Product } from './interfaces/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'platzi-store';
  power = 10;
  array = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  addItem() {
    this.array.push(this.title);
  }
  deleteItem(index: number) {
    this.array.splice(index, 1);
  }
}
