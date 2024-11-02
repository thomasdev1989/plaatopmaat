import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


interface Material {
  name: string;
  amount: number;
}


interface WoodThickness {
  thickness: number;
  unit: string;

}



@Component({
  selector: 'app-wood-card-filter',
  standalone: true,
  imports: [NgFor],
  templateUrl: "./wood-card-filter.component.html",
  styleUrl: './wood-card-filter.component.css'
})
export class WoodCardFilterComponent {
  material: Material[] = [
    { name: 'EIK', amount: 5 },
    { name: 'MDF', amount: 9 },
    { name: 'HardHout', amount: 22 }
  ]
  woodThickness: WoodThickness[] = [
    { thickness: 2, unit: "mm" },
    { thickness: 4, unit: "mm" },
    { thickness: 6, unit: "mm" },
    { thickness: 8, unit: "mm" },
    { thickness: 10, unit: "mm" },

  ]

}

// woods: Wood[] = [
//   { name: 'EIK', type: 'Eik Hardhout', price: 20.10, image: 'assets/img/oak.webp' },
//   { name: 'MULTIPLEX', type: 'Multiplex Hardhout', price: 15, image: 'assets/img/multiplex-hardhout.webp' },
//   { name: 'MDF', type: 'MDF Zwart', price: 15.22, image: 'assets/img/mdfzwart.webp' },
//   { name: 'Pine', type: 'Softwood', price: 15.01, image: 'assets/img/oak.webp' },
//   { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
//   { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
//   { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
//   { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
//   { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
//   { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },

// ];