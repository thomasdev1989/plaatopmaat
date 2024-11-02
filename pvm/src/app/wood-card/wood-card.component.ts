import { Component, Input} from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
interface Wood {
  name: string;
  type: string;
  price: number;
  image: string;
}
@Component({
  selector: 'app-wood-card',
  standalone: true,
  imports: [],
  templateUrl: "./wood-card.component.html",
  styleUrl: './wood-card.component.css'
})
export class WoodCardComponent {
    @Input() wood!: Wood; // Input property to receive the wood object from parent component
    constructor(private readonly shoppingCartService: ShoppingCartService) {}

  
    // Optionally, you can add methods here, for example:
    addToCart(wood: Wood): void {
      this.shoppingCartService.addToCart();
      // Logic to handle adding to cart can go here
    }

}
