import {Invoice} from "./invoice.aggregate";
import * as assert from "assert";

describe("Invoice", () =>{
   test("Should apply event", () => {
       const invoice = new Invoice();
       invoice.ingestInvoice("code", 1, 1, "key");
       expect(invoice.code).toBe("code");
   })
});
