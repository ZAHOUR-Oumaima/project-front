import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HolidayRequestItem } from '../models/holiday-request-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HolidayRequestService {

  readonly holidayRequestsUrl = environment.API_URL + 'api/holidayrequests';

  constructor(private http: HttpClient) { }

  /**
   * @description get holiday requests list
   */
  getHolidayRequestsList(): Observable<HolidayRequestItem[]> {
    return this.http.get<HolidayRequestItem[]>(this.holidayRequestsUrl);
  }

  /**
   * @description get holiday requests list
   */
  deleteHolidayRequest(holidayRequestId:string):Observable<HolidayRequestItem[]> {
    return this.http.delete<HolidayRequestItem[]>(this.holidayRequestsUrl + `/${holidayRequestId}`);
  }
}
