import { Component, inject } from '@angular/core';
<<<<<<< HEAD
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { DeviceService } from '../services/device';
=======
import { ActivatedRoute, Router } from '@angular/router';
import { DeviceService } from '../services/deviceService';
>>>>>>> e131468138bcd27260e8e1b04b7bf3ba427e06ed
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

export interface DeviceModel {
  id: string;
  name: string;
  description: string;

}
export interface Config {
  id: number;
  name: string;
}
@Component({
  selector: 'app-devices',
<<<<<<< HEAD
  imports: [AsyncPipe, CommonModule,],
=======
  imports: [AsyncPipe, CommonModule],
>>>>>>> e131468138bcd27260e8e1b04b7bf3ba427e06ed
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

<<<<<<< HEAD
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
=======
  handleClick(id: string, name: string, description: string) {
>>>>>>> e131468138bcd27260e8e1b04b7bf3ba427e06ed
    this.router.navigate(['/device', id] , { queryParams: { name, description }, });
  }
  
}
