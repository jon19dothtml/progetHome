import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from '../services/deviceService';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

export interface DeviceModel {
  id: string;
  name: string;
  description: string;

}
@Component({
  selector: 'app-devices',
  imports: [AsyncPipe, CommonModule],
  templateUrl: './devices.html',
  styleUrl: './devices.scss',
})
export class Devices {
  private router = inject(Router);
  private route = inject(ActivatedRoute)
  private devicesService = inject(DeviceService)
  devices$: Observable<{id: string, name: string}[]> = this.devicesService.getDevices()
  constructor () {
    this.devicesService = this.route.snapshot.data['device']
   // this.devicesService.postDevices({id: '20', name: 'devices 20'})
  }

  handleClick(id: string, name: string, description: string) {
    this.router.navigate(['/device', id] , { queryParams: { name, description }, });
  }
}
