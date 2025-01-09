import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'about',component: AboutComponent},
    {path:'item/:itemId',component: ItemComponent},
    {path:'**',component: PageNotFoundComponent},
];
