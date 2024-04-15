/**
 * Abstract Entity Parent
 */
export abstract class Entity {
  static convert<T extends Entity>(this: { new(): T }, obj: object): T {
    return Object.assign(new this(), obj);
  }

}
