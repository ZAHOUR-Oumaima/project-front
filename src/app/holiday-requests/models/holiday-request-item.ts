import { ValidationStatus } from "../enums/validation-status";

export class HolidayRequestItem {
    id: string;
    collaborator: string;
    startDate: Date;
    endDate: Date;
    status: ValidationStatus;
}