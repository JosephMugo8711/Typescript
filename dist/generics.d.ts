declare class DataStore<T> {
    private items;
    addItem(item: T): void;
    getItem(index: number): T;
    removeItem(index: number): void;
    getAllItems(): T[];
}
interface User {
    name: string;
    id: number;
}
declare const data: DataStore<User>;
declare function getValue<K, V>(key: K, value1: V, value2: V): V;
