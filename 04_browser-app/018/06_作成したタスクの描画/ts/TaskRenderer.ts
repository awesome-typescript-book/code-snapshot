import { Task } from './Task'

export class TaskRenderer {
  constructor(private readonly todoList: HTMLElement) {}

  append(task: Task) {
    const taskEl = this.render(task)

    this.todoList.append(taskEl)
  }

  private render(task: Task) {
    // <div class="taskItem">
    //   <span>タイトル</span>
    //   <button>削除</button>
    // </div>

    const taskEl = document.createElement('div')
    const spanEl = document.createElement('span')
    const deleteButtonEl = document.createElement('button')

    taskEl.id = task.id
    taskEl.classList.add('task-item')

    spanEl.textContent = task.title
    deleteButtonEl.textContent = '削除'

    taskEl.append(spanEl, deleteButtonEl)

    return taskEl
  }
}
