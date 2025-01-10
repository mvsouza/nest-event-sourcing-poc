import {Aggregate} from "./aggregate";

export interface IRepository<Entity extends Aggregate>{
    create(entity: Entity) : Promise<Entity>;
}
