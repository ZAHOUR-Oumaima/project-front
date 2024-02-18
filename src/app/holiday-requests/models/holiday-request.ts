import { ValidationStatus } from "../enums/validation-status";

export class HolidayRequest {
    id: string;
    collaborator: string;
    startDate: Date;
    endDate: Date;
    observation: string;
    requestDate: Date = new Date();
    status: ValidationStatus;
}