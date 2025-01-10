import {DomainEvent} from "../../../domain/aggregate";

export class InvoiceRejectedEvent extends DomainEvent {
    constructor(public appliedBy: string) {
        super(appliedBy);
        this.name = 'InvoiceRejected';
    }
}
