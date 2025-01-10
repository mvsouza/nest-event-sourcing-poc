import {InvoiceIngestedEvent} from "./invoice-ingested.event";
import {Aggregate} from "../../domain/aggregate";

export class Invoice extends Aggregate {
    public code: string;
    public managementCompany: number;
    public association: number;
    public key: string;
    public approvers: string[];

    constructor() {
        super();
    }

    ingestInvoice(code: string, managementCompany: number, association: number, key: string) {
        const event = new InvoiceIngestedEvent(code, managementCompany, association, key);
        this.when(event);
    }

    addDistribution(account: number, amount: number) {
        if(amount+ this.distTotalAmount > this.totalAmount)
            throw 'Should be less';
        this.data.distTotalAmount = amount+ this.distTotalAmount;
        const event = new InvoiceIngestedEvent(code, managementCompany, association, key);
        this.when(event);
    }

    approveInvoice(user: string) {
        const event = new InvoiceApprovedEvent(user);
        this.when(event);
    }
}
