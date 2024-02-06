import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HolidayRequestItem } from '../models/holiday-request-item';

@Injectable({
  providedIn: 'root'
})
export class HolidayRequestService {

  constructor(private http: HttpClient) { }

  /**
   * @description get holiday requests list
   */
  getHolidayRequestsList():Observable<HolidayRequestItem[]> {
    return this.http.get<HolidayRequestItem[]>('http://localhost:5000/api/holidayrequests');
  }
}
