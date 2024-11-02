import { Component } from '@angular/core';
import { WoodCardComponent } from '../wood-card/wood-card.component';
import { NgFor } from '@angular/common';

interface Wood {
  name: string;
  type: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-wood-card-list',
  standalone: true,
  imports: [WoodCardComponent, NgFor],
  templateUrl: "./wood-card-list.component.html",
  styleUrl: './wood-card-list.component.css'
})

export class WoodCardListComponent {
  woods: Wood[] = [
    { name: 'EIK', type: 'Eik Hardhout', price: 20.10, image: 'assets/img/oak.webp' },
    { name: 'MULTIPLEX', type: 'Hardhout', price: 15, image: 'assets/img/multiplex-hardhout.webp' },
    { name: 'MDF', type: 'MDF Zwart', price: 15.22, image: 'assets/img/mdfzwart.webp' },
    { name: 'Pine', type: 'Softwood', price: 15.01, image: 'assets/img/oak.webp' },
    { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
    { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
    { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
    { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
    { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },
    { name: 'Pine', type: 'Softwood', price: 15.00, image: 'assets/img/oak.webp' },

  ];

  addToCart(wood: Wood) {
    console.log(`${wood.name} added to cart!`);
    // Implement cart logic here
  }
}