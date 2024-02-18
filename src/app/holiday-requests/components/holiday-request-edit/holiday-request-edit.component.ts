import { Component, OnInit } from '@angular/core';
import { HolidayRequestPage } from '../../models/holiday-request-page';
import { HolidayRequestEditManagerService } from './holiday-request-edit-manager.service';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-holiday-request-edit',
  templateUrl: './holiday-request-edit.component.html',
  styleUrls: ['./holiday-request-edit.component.scss']
})
export class HolidayRequestEditComponent implements OnInit {

  pageObject: HolidayRequestPage;

  constructor(
    public service: HolidayRequestEditManagerService,
    private dialogConfig: DynamicDialogConfig
  ) {
    this.pageObject = this.dialogConfig.data.pageObject;
   }

  async ngOnInit() {
    if (this.pageObject.selectedHollidayId != '') {
      await this.getHolidayRequestById();
    }
  }

  /**
   * Save holidya request
   */
  saveHolidayRequest() {
    this.service.saveHolidayRequest(this.pageObject);
  }

  /**
   * Get holiday request
   */
  async getHolidayRequestById() {
    await this.service.getHolidayRequestById(this.pageObject);
  }
}
