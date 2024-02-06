import { Injectable } from '@angular/core';
import { HolidayRequestService } from '../../services/holiday-request.service';
import { HolidayRequestPage } from '../../models/holiday-request-page';

@Injectable({
  providedIn: 'root'
})
export class HolidayRequestListManagerService {

  constructor(public holidayRequestService: HolidayRequestService) { }

  /**
   * @description Get holiday requests list
   */
  async getHolidayRequestsList(pageObject: HolidayRequestPage) {
    await this.holidayRequestService.getHolidayRequestsList().subscribe(response => {
      pageObject.holidayRequests = response;
    })
  }
}
