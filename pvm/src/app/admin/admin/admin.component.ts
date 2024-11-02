import { Component } from '@angular/core';
import { StockOverviewComponent } from '../stock-overview/stock-overview.component';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [StockOverviewComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
