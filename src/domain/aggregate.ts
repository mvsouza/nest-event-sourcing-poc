import {AggregateRoot, IEvent} from "@nestjs/cqrs";

export class Aggregate extends AggregateRoot {
    id: string;
    events: DomainEvent[] = [];

    when(event: DomainEvent){
        event.version = this.events.length;
        this.applyChanges(event);
        this.events.push(event);
        this.apply(event);
    }

    applyChanges(event: DomainEvent){
        for(const key in event.data)
            this[key] = event.data[key];
    }

    foldLeft(){
        for(const event of this.events.sort((a,b) => a.version - b.version))
            this.applyChanges(event);
    }
}


export class DomainEvent implements IEvent {
    version: number;
    name: string;
    appliedAt: Date;
    data: {[key:string]: any};
    constructor(public appliedBy: string) {
        this.appliedAt = new Date();
    }
}
