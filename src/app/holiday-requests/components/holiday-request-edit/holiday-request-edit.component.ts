import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-holiday-request-edit',
  templateUrl: './holiday-request-edit.component.html',
  styleUrls: ['./holiday-request-edit.component.scss']
})
export class HolidayRequestEditComponent implements OnInit {

  value1 = "Oumaima";
  value2 = new Date();
  value3 = "HELLO EVERYONE !";
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Save holidya request
   */
  saveHolidayRequest() {}
}
