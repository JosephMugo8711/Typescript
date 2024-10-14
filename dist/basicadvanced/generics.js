class DataStore {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getAllItems() {
        return [...this.items];
    }
}
const data = new DataStore();
data.getItem(0);
function getValue(key, value1, value2) {
    if (key) {
        return value1;
    }
    return value2;
}
getValue('hello', 1, 2);
