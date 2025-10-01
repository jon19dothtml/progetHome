import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DeviceService } from '../services/device';

export const deviceResolver: ResolveFn<{id: string, name:string}[]> = (route, state) => {
  const deviceService= inject(DeviceService)
  return deviceService.getConfig();
};
