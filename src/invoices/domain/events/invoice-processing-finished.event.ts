import {DomainEvent} from "../../../domain/aggregate";

export class InvoiceProcessingFinishedEvent extends DomainEvent {
    constructor(
        public appliedBy: string,
        public data: {[key: string]:any}
    ) {
        super(appliedBy);
        this.data = data;
        this.name = 'InvoiceProcessingFinished';
    }
}
