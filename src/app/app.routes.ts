import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Devices } from './devices/devices';
import { ErrorPage } from './error-page/error-page';
import { Login } from './login/login';
import { Device } from './device/device';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path:'devices',
        component: Devices
    },
    {
        path: 'device/:id',
        component: Device
    },
    {
        path: '**',
        component: ErrorPage
    }
];
