import { Component } from '@angular/core';
import { WoodCardListComponent } from '../wood-card-list/wood-card-list.component';
import { WoodCardFilterComponent } from '../wood-card-filter/wood-card-filter.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WoodCardListComponent,WoodCardFilterComponent],
  templateUrl: "./home.component.html",
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
