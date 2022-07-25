import {Task} from "../entities/Task";

export class LocalStorageProvider  {
    private readonly storageKey = "tasks";

     getAll(): Task[] {
        const tasks = localStorage.getItem(this.storageKey);
        if (tasks) {
            return JSON.parse(tasks);
        }
        return [];
    }

    public create(task: Task): Task {
        const tasks = this.getAll();
        tasks.push(task);
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
        return task;

    }

    public update(id: Number, task: Task): Task {
        const tasks = this.getAll();
        const index = tasks.findIndex(t => t.id === id);
        if (index >= 0) {
            tasks[index] = task;
        }
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
        return task;
    }

    public delete(id: number): void {
        const tasks = this.getAll();
        const index = tasks.findIndex(t => t.id === id);
        if (index >= 0) {
            tasks.splice(index, 1);
        }
        localStorage.setItem(this.storageKey, JSON.stringify(tasks));
    }

}