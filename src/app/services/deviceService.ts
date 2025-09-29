import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private http = inject(HttpClient);
  objList: any[] = []

  getDevices (){
    this.http.get<any[]>('https://api.restful-api.dev/objects').subscribe(obj =>{
      this.objList = obj
    });
  } 

  postDevices (payload: unknown){
   this.http.post<unknown>('https://api.restful-api.dev/objects', payload).subscribe(config => {
    console.log('Update config:', config)
   });
  }
}
