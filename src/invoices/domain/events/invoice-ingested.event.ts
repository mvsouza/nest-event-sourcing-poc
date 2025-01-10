import {DomainEvent} from "../../../domain/aggregate";

export class InvoiceIngestedEvent extends DomainEvent {
    constructor(
        public readonly appliedBy: string,
        public readonly code: string,
        public readonly managementCompany: number,
        public readonly association: number,
        public readonly key: string
    ) {
        super(appliedBy);
        this.data = {code, managementCompany, association, key};
        this.name = 'InvoiceIngested';
    }
}
