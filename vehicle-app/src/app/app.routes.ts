import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { VehicleComponent } from './Components/vehicle/vehicle.component';
import { VehicleDetailsComponent } from './Components/vehicle-details/vehicle-details.component';


export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'vehicle',component: VehicleComponent},
    {path:'vehicle/:vehicleId',component: VehicleDetailsComponent}
];
