import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'admin', component:AdminComponent}
    
];