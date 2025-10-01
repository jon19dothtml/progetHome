import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Devices } from './devices/devices';
import { ErrorPage } from './error-page/error-page';
import { Login } from './login/login';
import { Device } from './device/device';
import { deviceResolver } from './resolvers/device-resolver';
import { authGuard } from './guards/auth-guard';
import { DeviceInfo } from './components/device-info/device-info';
import { FormSub } from './subscrition/form-sub/form-sub';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'devices',
    component: Devices,

    resolve: {
      device: deviceResolver,
    },
    canActivate: [authGuard],
    children: [
      {
        path: 'info',
        component: DeviceInfo,
      },
      {
        path: 'id',
        component: Device,
      },
    ],
  },
  {
    path: 'form-sub',
    component: FormSub
  },

  {
    path: '**',
    component: ErrorPage,
  },
];
