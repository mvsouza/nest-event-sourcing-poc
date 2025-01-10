import {DomainEvent} from "../../../domain/aggregate";

export class InvoiceQuestionAnsweredEvent extends DomainEvent {
    constructor(public appliedBy: string, public answer: string) {
        super(appliedBy);
        this.name = 'InvoiceQuestionAnswered';
        this.data = { answer };
    }
}
