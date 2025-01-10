import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { FileService } from "../../infrastructure/file.service";
import { IngestInvoiceCommand } from './ingest-invoice.command';
import { Invoice } from "../domain/invoice.aggregate";
import { IInvoiceRepository } from "../domain/invoice.repository.interface";

@CommandHandler(IngestInvoiceCommand)
export class IngestInvoiceHandler implements ICommandHandler<IngestInvoiceCommand> {

    constructor(private fileService: FileService, private invoiceRepository: IInvoiceRepository) {
    }
    async execute(command: IngestInvoiceCommand): Promise<void> {
        // Here, you can perform the necessary logic to create a new note
        const { code, managementCompany, key, association } = command;

        // Emit a NoteCreatedEvent
        const invoice = new Invoice();
        invoice.ingestInvoice(code, managementCompany, association, key);
        this.invoiceRepository.create(invoice);
        this.invoiceRepository.commit();
        invoice.commit();
        
    }
}
