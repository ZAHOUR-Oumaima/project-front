import { Injectable } from '@angular/core';
import { HolidayRequestService } from '../../services/holiday-request.service';
import { HolidayRequestPage } from '../../models/holiday-request-page';
import { ConfirmationService, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class HolidayRequestListManagerService {

  constructor(
    public holidayRequestService: HolidayRequestService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  /**
   * @description Get holiday requests list
   */
  async getHolidayRequestsList(pageObject: HolidayRequestPage) {
    await this.holidayRequestService.getHolidayRequestsList().subscribe(response => {
      pageObject.holidayRequests = response;
    });
  }

  /**
   * @description Delete holiday request
   * @param id holiday request Id 
   */
  deleteHolidayRequest(id: string, pageObject: HolidayRequestPage) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.holidayRequestService.deleteHolidayRequest(id).subscribe(response => {
          if (response) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Holiday request deleted successfully.' });
            this.getHolidayRequestsList(pageObject);
          }
        })
      }
  });
  }
}
