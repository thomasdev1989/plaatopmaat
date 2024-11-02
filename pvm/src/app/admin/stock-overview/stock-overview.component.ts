import { Component } from '@angular/core';
import { StockItemComponent } from '../stock-item/stock-item.component';
import { NgFor } from '@angular/common';

interface StockItem {
  src: string;
  type: string;
  thickness: number;
  unit: string
  totalInStock: number
  price: number
}

@Component({
  selector: 'app-stock-overview',
  standalone: true,
  imports: [ NgFor,StockItemComponent],
  templateUrl: './stock-overview.component.html',
  styleUrl: './stock-overview.component.css'
  
})
export class StockOverviewComponent {
  stockItems: StockItem[] = [
    {
      src:"../../../../assets/img/oak.webp",type: 'EIK', thickness: 2, unit: 'mm', totalInStock: 14, price: 22.03
    },
    {
      src:"../../../../assets/img/multiplex.webp",type: 'Multiplex', thickness: 6, unit: 'mm', totalInStock: 6, price: 18.33
    },
    {
      src:"../../../../assets/img/mdfzwart.webp",type: 'MDF', thickness: 4, unit: 'mm', totalInStock: 9, price: 16.01
    },
    {
      src:"../../../../assets/img/mdfzwart.webp",type: 'MDF', thickness: 6, unit: 'mm', totalInStock: 4, price: 21.33
    },   {
      src:"../../../../assets/img/multiplex-hardhout.webp",type: 'Multiplex Hardhout', thickness: 6, unit: 'mm', totalInStock: 4, price: 21.33
    },
    {
      src:"../../../../assets/img/multiplex.webp",type: 'Multiplex', thickness: 6, unit: 'mm', totalInStock: 6, price: 18.33
    },
    {
      src:"../../../../assets/img/mdfzwart.webp",type: 'MDF', thickness: 4, unit: 'mm', totalInStock: 9, price: 16.01
    },
    {
      src:"../../../../assets/img/mdfzwart.webp",type: 'MDF', thickness: 6, unit: 'mm', totalInStock: 4, price: 21.33
    },   {
      src:"../../../../assets/img/multiplex-hardhout.webp",type: 'Multiplex Hardhout', thickness: 6, unit: 'mm', totalInStock: 4, price: 21.33
    }
  ]

}
