import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
<<<<<<< HEAD
import { DeviceService } from '../services/device';

export const deviceResolver: ResolveFn<{id: string, name:string}[]> = (route, state) => {
  const deviceService= inject(DeviceService)
  return deviceService.getConfig();
=======
import { DeviceService } from '../services/deviceService';

export const deviceResolver: ResolveFn<{id: string, name: string}[]> = (_route, state) => {
  const deviceService = inject(DeviceService)
  return deviceService.getDevices();
>>>>>>> e131468138bcd27260e8e1b04b7bf3ba427e06ed
};
