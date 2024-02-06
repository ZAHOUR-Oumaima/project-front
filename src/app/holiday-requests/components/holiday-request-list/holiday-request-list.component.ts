import { Component, OnInit } from '@angular/core';
import { HolidayRequestPage } from '../../models/holiday-request-page';
import { HolidayRequestListManagerService } from './holiday-request-list-manager.service';

@Component({
  selector: 'app-holiday-request-list',
  templateUrl: './holiday-request-list.component.html',
  styleUrls: ['./holiday-request-list.component.scss']
})
export class HolidayRequestListComponent implements OnInit {

  pageObject: HolidayRequestPage = new HolidayRequestPage();

  constructor(public service: HolidayRequestListManagerService) { }

  async ngOnInit() {
    await this.service.getHolidayRequestsList(this.pageObject);
  }

}
