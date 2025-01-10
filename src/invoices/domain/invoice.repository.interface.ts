import { IRepository } from "../../domain/repository.interface";
import {Invoice} from "./invoice.aggregate";

export interface IInvoiceRepository extends IRepository<Invoice> {}
