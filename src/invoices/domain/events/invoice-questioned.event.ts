import {DomainEvent} from "../../../domain/aggregate";

export class InvoiceQuestionedEvent extends DomainEvent {
    constructor(public appliedBy: string, public question: string) {
        super(appliedBy);
        this.name = 'InvoiceQuestioned';
        this.data = { question };
    }
}
