import { Component } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';



@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: "./navbar.component.html",
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  cartCount: number = 0;
  constructor(private readonly shoppingCartService: ShoppingCartService) { }

  ngOnInit(): void {
    // Subscribe to changes in the cart count
    this.shoppingCartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });

  }
}
