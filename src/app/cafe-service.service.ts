import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CafeServiceService {
  _url: string = "https://www.mocky.io/v2/5dfccffc310000efc8d2c1ad"
  constructor(private http: HttpClient) { }
  getCafeMenu() {
    return this.http.get(this._url);
  }
}
