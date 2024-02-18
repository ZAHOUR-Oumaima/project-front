import { Injectable } from '@angular/core';
import { HolidayRequestService } from '../../services/holiday-request.service';
import { HolidayRequestPage } from '../../models/holiday-request-page';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class HolidayRequestEditManagerService {

  constructor(
    public holidayRequestService: HolidayRequestService,
    public messageService: MessageService,
  ) { }

  /**
   * Save holidya request
   */
  async saveHolidayRequest(pageObject: HolidayRequestPage) {
    if (!pageObject.holidayRequest?.id) {
      await this.holidayRequestService.createHolidayRequest(pageObject.holidayRequest).subscribe(response => {
        pageObject.holidayRequest = response;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Holiday request created successfully.'});
      })
    }
    else {
      await this.holidayRequestService.updateHolidayRequest(pageObject.holidayRequest).subscribe(response => {
        pageObject.holidayRequest = response;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Holiday request updated successfully.'});
      })
    }
  }

  /**
   * Get holiday request by id
   */
  async getHolidayRequestById(pageObject: HolidayRequestPage) {
    await this.holidayRequestService.getHolidayRequestById(pageObject.selectedHollidayId).subscribe(response => {
      pageObject.holidayRequest = response;
      pageObject.holidayRequest.requestDate = new Date(response.requestDate);
      pageObject.holidayRequest.startDate = new Date(response.startDate);
      pageObject.holidayRequest.endDate = new Date(response.endDate);
    })
  }
}
