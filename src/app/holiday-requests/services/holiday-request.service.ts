import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HolidayRequestItem } from '../models/holiday-request-item';
import { environment } from 'src/environments/environment';
import { HolidayRequest } from '../models/holiday-request';

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
  deleteHolidayRequest(holidayRequestId:string):Observable<boolean> {
    return this.http.delete<boolean>(this.holidayRequestsUrl + `/${holidayRequestId}`);
  }

  /**
   * @description get holiday requests list
   */
  createHolidayRequest(query: HolidayRequest): Observable<HolidayRequest> {
    return this.http.post<HolidayRequest>(this.holidayRequestsUrl + '/Create', query);
  }

  /**
   * @description get holiday request by id
   */
  getHolidayRequestById(holidayRequestId:string): Observable<HolidayRequest> {
    return this.http.get<HolidayRequest>(this.holidayRequestsUrl + `/${holidayRequestId}`);
  }

  /**
   * @description get holiday requests list
   */
  updateHolidayRequest(query: HolidayRequest): Observable<HolidayRequest> {
    return this.http.post<HolidayRequest>(this.holidayRequestsUrl + '/Update', query);
  }
}
