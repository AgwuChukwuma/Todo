interface TodoItem {
    id: number;
    task: string;
    completed: boolean;
    dueDate: Date;
}

class TodoList {
    private todos: TodoItem[] = [];
    private nextId: number = 1;

    addTodo(task: string, dueDate: Date): void {
        const newTodo: TodoItem = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }

    completeTodo(id: number): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    }

    removeTodo(id: number): void {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    }

    listTodos(): TodoItem[] {
        return this.todos;
    }

    filterByCompleted(completed: boolean): TodoItem[] {
        return this.todos.filter(todo => todo.completed === completed);
    }

    updateTask(id: number, newTask: string): void {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.task = newTask;
        } else {
            console.error(`Todo with id ${id} not found.`);
        }
    }

    clearCompleted(): void {
        this.todos = this.todos.filter(todo => !todo.completed);
    }
}


const todoList = new TodoList();

// Adding todos
todoList.addTodo("Finish TypeScript project", new Date("2023-10-31"));
todoList.addTodo("Read a book", new Date("2023-11-10"));
todoList.addTodo("Go grocery shopping", new Date("2023-10-28"));

// Completing a todo
todoList.completeTodo(1);

// Listing todos
console.log(todoList.listTodos());

// Updating a task
todoList.updateTask(2, "Read two books");

// Filtering completed todos
console.log(todoList.filterByCompleted(true));

// Clearing completed todos
todoList.clearCompleted();

// Listing todos again
console.log(todoList.listTodos());
