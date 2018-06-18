import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TimesServiceService {

  constructor(private http: HttpClient) {}

  getTimers() {
    return this.http.get('assets/data_two.json')

  }

}
