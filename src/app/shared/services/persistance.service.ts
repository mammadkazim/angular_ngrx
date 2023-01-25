import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  constructor() {}
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('error in saving to local storage');
    }
  }
  get(key: any) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      console.error('error in getting from local storage');
      return null;
    }
  }
}
