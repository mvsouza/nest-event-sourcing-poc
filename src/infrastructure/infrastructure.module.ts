import { Module } from '@nestjs/common';
import { FileService } from "./file.service";
import { InvoiceRepository } from "./domain/invoice.repository";

@Module({
    providers:[InvoiceRepository, FileService],
})
export class InfrastructureModule {}
