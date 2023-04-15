import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Product[] = [{

    id:'1',
    name: 'Product 1',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    price: 100

  },
  {

    id:'2',
    name: 'Product 1',
    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    price: 100

  },
  {

    id:'3',
    name: 'Product 1',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    price: 100

  }]

  onLoaded(img: string) {
    console.log('log padre', img);
  }
}
