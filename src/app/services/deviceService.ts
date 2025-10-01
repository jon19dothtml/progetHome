import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private http = inject(HttpClient);

  getDevices (): Observable<{id: string, name: string}[]>
  {
    return this.http.get<{id: string, name: string}[]>('https://api.restful-api.dev/objects');
  }

  postDevices (payload: object){
   return this.http.post<{id: string, name: string}>('https://api.restful-api.dev/objects', payload)
  }
}
