import { Module } from '@nestjs/common';
import {CqrsModule} from "@nestjs/cqrs";
import {IngestInvoiceHandler} from "./application/ingest-invoice.handler";

@Module({
    imports: [CqrsModule],
    providers: [IngestInvoiceHandler]
})
export class InvoicesModule {}
