import { Inject } from "@nestjs/common";
import { DataSource, Repository } from 'typeorm';
import { Invoice } from "../../invoices/domain/invoice.aggregate";
import { IRepository } from "../../domain/repository.interface";


export class InvoiceRepository implements IRepository<Invoice>{
    repo: Repository<Invoice>
    constructor(@Inject('DataSource') dataSource: DataSource) {
        this.repo = dataSource.getRepository(Invoice);
    }

    async create(invoice: Invoice) : Promise<Invoice> {
        return this.repo.create(invoice);
    }
}
