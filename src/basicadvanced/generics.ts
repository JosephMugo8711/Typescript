
// store a bunch of values or numbers
// works with any data type that want because its generic
// this allows us to have more flexible functions, methods, classes
// That can accept any differentdata types
class DataStore<T> {
    private items: T[] = [];

    addItem(item: T): void {
        this.items.push(item);
    }

    getItem(index: number): T {
        return this.items[index];
    }
    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    // our functions are using the generic types 
    // so we are returning an array of whatever the type of this data will be
    getAllItems(): T[] {
        return [...this.items];
    }
}

interface User {
    name: string;
    id: number;
}

// creating a new Datastore of type string
// const data = new DataStore<string>()
//  doesnt have to be of primitive data type can  of any data type we want
const data = new DataStore<User>()
data.getItem(0)


// Advanced generics
// We have a function called getValue which is generic
// Can take in a type of k and a type v
// This key will have some types and then the two values will be the same type
// Will return one of those values types
function getValue<K, V>(key: K, value1: V, value2: V): V {
    
    // does key actually exist
    if (key) {
        return value1;
    }
    return value2;

}

getValue('hello', 1, 2)