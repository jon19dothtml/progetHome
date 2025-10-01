import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Devices } from './devices/devices';
import { ErrorPage } from './error-page/error-page';
import { Login } from './login/login';
import { Device } from './device/device';
<<<<<<< HEAD
import { deviceResolver } from './resolvers/device-resolver';
import { authGuard } from './guards/auth-guard';
import { DeviceInfo } from './components/device-info/device-info';
import { FormSub } from './subscrition/form-sub/form-sub';
=======
import { authGuard } from './guards/auth-guard';
import { Registration } from './registration/registration';
>>>>>>> e131468138bcd27260e8e1b04b7bf3ba427e06ed

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
<<<<<<< HEAD
=======
    path: 'registration',
    component: Registration,
  },
  {
>>>>>>> e131468138bcd27260e8e1b04b7bf3ba427e06ed
    path: 'login',
    component: Login,
  },
  {
    path: 'devices',
    component: Devices,
<<<<<<< HEAD

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

=======
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
>>>>>>> e131468138bcd27260e8e1b04b7bf3ba427e06ed
  {
    path: '**',
    component: ErrorPage,
  },
];
