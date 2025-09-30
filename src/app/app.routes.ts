import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Devices } from './devices/devices';
import { ErrorPage } from './error-page/error-page';
import { Login } from './login/login';
import { Device } from './device/device';
import { authGuard } from './guards/auth-guard';
import { Registration } from './registration/registration';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'registration',
    component: Registration,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'devices',
    component: Devices,
    children: [
      {
        path: ':id',
        component: Device,
      },
    ],
    canActivate: [
      authGuard      
    ],
  },
  {
    path: 'device/:id',
    component: Device,
  },
  {
    path: '**',
    component: ErrorPage,
  },
];
