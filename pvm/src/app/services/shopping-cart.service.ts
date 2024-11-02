import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private readonly cartCount = new BehaviorSubject<number>(0);
  cartCount$ =  this.cartCount.asObservable(); // Observable to expose

  constructor() { }

  addToCart():void{
    const currentCount = this.cartCount.value;
    this.cartCount.next(currentCount + 1); // Increment the cart count
  }

  totalCount():number{
    return this.cartCount.value;

  }
}

