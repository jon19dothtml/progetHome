import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DeviceService } from '../services/device';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

export interface DeviceModel {
  id: number;
  name: string;
  description: string;

}
export interface Config {
  id: number;
  name: string;
}
@Component({
  selector: 'app-devices',
  imports: [AsyncPipe, CommonModule,],
  templateUrl: './devices.html',
  styleUrl: './devices.scss',
})
export class Devices {
  private router = inject(Router);

  private route = inject(ActivatedRoute);
  private devicesDetail: unknown |undefined;
  devices: DeviceModel[] = [
    { id: 1, name: 'Device 1', description: 'asd'},
    { id: 2, name: 'Device 2', description:'qwe'},
    { id: 3, name: 'Device 3', description:'123'},
  ];

  private deviceService = inject(DeviceService); 

  dispositivi$: Observable<{id: string, name:string}[]> = this.deviceService.getConfig();
  constructor() {
    // this.deviceService.getConfig();
    // this.deviceService.postDispositivi({id: 4, name: 'Device 4'});
    this.devicesDetail= this.route.snapshot.data['device'];
    console.log(':::device ', this.devicesDetail);
  }



  handleClick(id: number, name: string, description: string) {
    this.router.navigate(['/device', id] , { queryParams: { name, description }, });
  }
  
}
