import { Injectable } from '@angular/core';
import { Vehicle } from '../Models/vehicle';
import { VEHICLES } from '../Mock-db/vehicles';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  public getVehicles(): Vehicle[]{
    return VEHICLES;
  }

  public getVehicle(vehicleId: number): Vehicle | null {
    const vehicle: Vehicle | undefined = VEHICLES.find((vehicle: Vehicle) => vehicle.id == vehicleId)
    return vehicle ? vehicle : null;
  }

}
