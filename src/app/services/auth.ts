import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private authTrue : boolean = true
  isAuthenticated(): boolean {
    return this.authTrue;
  }
  
  // export class Auth {
  // private authTrue : boolean = false
  // isAuthenticated(): boolean {
  //   return this.authTrue;
  // }
  
}
