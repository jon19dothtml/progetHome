import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { config, Observable } from 'rxjs';
import { Config } from '../devices/devices';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private http = inject(HttpClient);
  // objList: any[] = [];

  // getDevices (){
  //   this.http.get<any[]>('https://api.restful-api.dev/objects').subscribe(obj =>{
  //     this.objList = obj
  //   });
  // } 

  // postDevices (payload: unknown){
  //  this.http.post<unknown>('https://api.restful-api.dev/objects', payload).subscribe(config => {
  //   console.log('Update config:', config)
  //  });
  // }

  getConfig() : Observable<{id: string, name:string}[]>{
    return this.http.get<{id: string, name:string}[]>('https://api.restful-api.dev/objects');
    };
  
  
  postDispositivi(payload: object){
    return this.http.post<unknown>('https://api.restful-api.dev/objects', payload);
  };
  

}