import {DomainEvent} from "../../../domain/aggregate";

export class InvoiceApprovedEvent extends DomainEvent {
    constructor(public appliedBy: string) {
        super(appliedBy);
        this.name = 'InvoiceApproved';
    }
}
