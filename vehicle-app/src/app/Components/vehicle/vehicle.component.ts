import { Component, inject, OnInit } from '@angular/core';
import { VehicleService } from '../../Services/vehicle.service';
import { Vehicle } from '../../Models/vehicle';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-vehicle',
  imports: [VehicleCardComponent, NgFor],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent implements OnInit {
  
  private _vehicleService = inject(VehicleService);
  
  public vehicles: Vehicle[] = [] as Vehicle[];

  ngOnInit(): void {
    this.vehicles = this._vehicleService.getVehicles();
    console.log(this.vehicles)
  }

}
