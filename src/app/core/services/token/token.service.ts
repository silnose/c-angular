import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  saveToken(token: string) {
    localStorage.setItem('ACCESS_TOKEN', token);
  }

  getToken() {
    return localStorage.getItem('ACCESS_TOKEN');
  }
}
