import { Aggregate, DomainEvent } from "./aggregate";
import * as assert from "assert";

describe("Aggregate", () =>{
    test("Should apply event", () =>{
        const aggregate = new Aggregate();
        const event = new DomainEvent();
        event.version = 1;
        event.data = {a:1,b:2};
        aggregate.when(event)
        expect(aggregate["a"]).toBe(1);
        expect(aggregate["b"]).toBe(2);
        expect(aggregate.events).toContain(event);
        expect(aggregate.events.length).toBe(1);
    });
    const event1 = new DomainEvent();
    event1.data = {a:1};
    const event2 = new DomainEvent();
    event2.data = {a:2};
    test.each([[[event1, event2]],[[event2, event1]]])("Should apply events in order", (events) =>{
        const aggregate = new Aggregate();
        const event1 = new DomainEvent();
        aggregate.events = [event1, event2]
        aggregate.foldLeft()
        expect(aggregate["a"]).toBe(2);
        expect(aggregate.events).toContain(event1);
        expect(aggregate.events).toContain(event2);
        expect(aggregate.events.length).toBe(2);
    });
})
