import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DeviceService } from '../services/deviceService';

export const deviceResolver: ResolveFn<{id: string, name: string}[]> = (_route, state) => {
  const deviceService = inject(DeviceService)
  return deviceService.getDevices();
};
