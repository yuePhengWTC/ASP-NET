import { Component, inject, Input } from '@angular/core';
import { Vehicle } from '../../Models/vehicle';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-card',
  imports: [NgIf],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css'
})
export class VehicleCardComponent {
  private _router = inject(Router);
  
  @Input() vehicle: Vehicle | null = null;

  public select(vehicle: Vehicle): void {
    this._router.navigate([`/vehicle/${vehicle.id}`])
    // console.log(vehicle)
  }

}
