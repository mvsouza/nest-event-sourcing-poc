export class IngestInvoiceCommand {
    constructor(public readonly code: string, public readonly managementCompany: number, public readonly association: number, public readonly key: string) {}
}
