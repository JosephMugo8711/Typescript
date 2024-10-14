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
declare const updateTodo: (todo: Partial<Todo>) => void;
declare const myTodo: Readonly<Todo>;
declare const pages: Record<string, PageInfo>;
type TodoPreview = Pick<Todo2, "title" | "completed">;
declare const previewTodo: TodoPreview;
type TodoPreview2 = Omit<Todo, "id">;
declare const previewTodo2: TodoPreview2;
