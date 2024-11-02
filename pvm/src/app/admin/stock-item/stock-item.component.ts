import { Component, Input } from '@angular/core';
interface StockItem {
  src: string;
  type: string;
  thickness: number;
  unit: string
  totalInStock: number
  price: number
}
@Component({
  selector: '[app-stock-item]',
  standalone: true,
  imports: [],
  templateUrl: './stock-item.component.html',
  styleUrl: './stock-item.component.css'
})
export class StockItemComponent {
  @Input() stockItem!: StockItem;

}
