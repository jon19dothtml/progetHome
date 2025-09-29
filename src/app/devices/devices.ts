import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceService } from '../services/deviceService';

export interface DeviceModel {
  id: number;
  name: string;
  description: string;

}
@Component({
  selector: 'app-devices',
  imports: [],
  templateUrl: './devices.html',
  styleUrl: './devices.scss',
})
export class Devices {
  private router = inject(Router);
  private decicesService = inject(DeviceService)

  devices: DeviceModel[] = this.decicesService.objList/* [
    { id: 1, name: 'Device 1', description: 'asd'},
    { id: 2, name: 'Device 2', description:'qwe'},
    { id: 3, name: 'Device 3', description:'123'},
  ];
 */
  constructor () {
    this.decicesService.getDevices()
  }

  handleClick(id: number, name: string, description: string) {
    this.router.navigate(['/device', id] , { queryParams: { name, description }, });
  }
}
