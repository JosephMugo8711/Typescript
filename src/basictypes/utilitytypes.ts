interface Todo {
    title: string;
    description: string;
}

interface PageInfo {
    title: string;
}

interface Todo2 {
    id: number;
    title: string;
    completed: boolean;
}

// Partial makes all properties in T optional 
const updateTodo = (todo: Partial<Todo>) => {
    todo.description
}

// Readonly utility type
// specify that a property is readonly and cannot be changed
// when you accept some object and want to declare that you dont wanna modify anything on it
const myTodo: Readonly<Todo> = { 
    title: "Learn Typescript",
    description: "Match easier"
}

// myTodo.title = "Changed Title" // Error: Cannot assign to 'title' because it is a read-only property
// pages variable which is a record 
// the key in the record is a string
// the value is the PageInfo type
const pages: Record<string, PageInfo> = {
    // string home, about, contact
    // associated with an instance of the page info
    home: { title: "Home" },
    about: { title: "About" },
    contact: { title: "Contact" },
}
// Pick utility type
type TodoPreview = Pick<Todo2, "title" | "completed">;

// variable that returns a TodoPreview
const previewTodo: TodoPreview = {
    title: "Buy milk",
    completed: false,
}

// Omit Utility Type
// previewTodo.title = "Changed Title" // Error: Cannot assign to 'title' because it is a read-only property
// looks at some type and omits all the properties specified in my case "id" live all the other once
type TodoPreview2 = Omit<Todo, "id">;

// variable that returns a TodoPreview2
const previewTodo2: TodoPreview2 = {
    title: "Buy milk",
    description: "Buy 2 liters",
}

// previewTodo2.title = "Changed Title" // Error: Cannot assign to 'title' because it is a read-only property