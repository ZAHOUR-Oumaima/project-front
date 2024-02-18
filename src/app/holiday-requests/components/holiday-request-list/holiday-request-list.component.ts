import { Component, OnInit } from '@angular/core';
import { HolidayRequestPage } from '../../models/holiday-request-page';
import { HolidayRequestListManagerService } from './holiday-request-list-manager.service';
import { HolidayRequest } from '../../models/holiday-request';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HolidayRequestEditComponent } from '../holiday-request-edit/holiday-request-edit.component';

@Component({
  selector: 'app-holiday-request-list',
  templateUrl: './holiday-request-list.component.html',
  styleUrls: ['./holiday-request-list.component.scss']
})
export class HolidayRequestListComponent implements OnInit {

  pageObject: HolidayRequestPage = new HolidayRequestPage();
  holidayDialogRef: DynamicDialogRef;

  constructor(
    public service: HolidayRequestListManagerService,
    public dialogService: DialogService
  ) { }

  async ngOnInit() {
    await this.service.getHolidayRequestsList(this.pageObject);
  }

  /**
   * @description Delete holiday request
   * @param id holiday request Id 
   */
  deleteHolidayRequest(id: string) {
    this.service.deleteHolidayRequest(id, this.pageObject);
  }

  /**
   * Display holiday request edit dialog 
   */
  displayHolidayEditDialog() {
    this.holidayDialogRef = this.dialogService.open(HolidayRequestEditComponent, {
      data: {
          pageObject: this.pageObject
      },
      header: 'Holidy request edition',
      width: '70%'
    });

    this.holidayDialogRef.onClose.subscribe(async (response) =>{
      this.onHide();
    });
  }

  /**
   * Reload list after hiding holiday edition dialog
   */
  async onHide() {
    this.pageObject.selectedHollidayId = '';
    await this.service.getHolidayRequestsList(this.pageObject);
    this.pageObject.holidayRequest = new HolidayRequest();
  }

  /**
   * @description Delete holiday request
   * @param id holiday request Id 
   */
  modifyHolidayRequest(id: string) {
    this.pageObject.selectedHollidayId = id;
    this.displayHolidayEditDialog();
  }
}
