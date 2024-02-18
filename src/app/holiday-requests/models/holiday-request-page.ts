import { HolidayRequest } from "./holiday-request";
import { HolidayRequestItem } from "./holiday-request-item";

export class HolidayRequestPage {
    holidayRequests: HolidayRequestItem[] = [];
    displayCreateDialog = false;
    selectedHollidayId: string;
    holidayRequest: HolidayRequest = new HolidayRequest();
}