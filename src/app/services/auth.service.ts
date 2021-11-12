import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  isAccessible: boolean = false;
  constructor() { }

  public isRouteAccessible():boolean{
    return true;
  }

  public setIsAccessible(isAccessible:boolean):void{
    this.isAccessible = isAccessible;
  }

}
