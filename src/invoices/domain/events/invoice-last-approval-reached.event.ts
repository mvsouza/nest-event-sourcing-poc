import {DomainEvent} from "../../../domain/aggregate";

export class InvoiceLastApprovalReachedEvent extends DomainEvent {
    constructor(public appliedBy: string) {
        super(appliedBy);
        this.name = 'InvoiceLastApprovalReached';
    }
}
