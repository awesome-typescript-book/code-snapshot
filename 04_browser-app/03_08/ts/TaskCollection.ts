import { Task } from './Task'

export class TaskCollection {
  private tasks: Task[] = []

  add(task: Task) {
    this.tasks.push(task)
  }

  delete(task: Task) {
    this.tasks = this.tasks.filter(({ id }) => id !== task.id)
  }
}
