import dragula from 'dragula'

import { Status, Task, statusMap } from './Task'

export class TaskRenderer {
  constructor(
    private readonly todoList: HTMLElement,
    private readonly doingList: HTMLElement,
    private readonly doneList: HTMLElement,
  ) {}

  append(task: Task) {
    const { taskEl, deleteButtonEl } = this.render(task)

    this.todoList.append(taskEl)

    return { deleteButtonEl }
  }

  remove(task: Task) {
    const taskEl = document.getElementById(task.id)

    if (!taskEl) return

    if (task.status === statusMap.todo) {
      this.todoList.removeChild(taskEl)
    }

    if (task.status === statusMap.doing) {
      this.doingList.removeChild(taskEl)
    }

    if (task.status === statusMap.done) {
      this.doneList.removeChild(taskEl)
    }
  }

  subscribeDragAndDrop(onDrop: (el: Element, sibling: Element | null, newStatus: Status) => void) {
    dragula([this.todoList, this.doingList, this.doneList]).on('drop', (el, target, _source, sibling) => {
      let newStatus: Status = statusMap.todo

      if (target.id === 'doingList') newStatus = statusMap.doing
      if (target.id === 'doneList') newStatus = statusMap.done

      onDrop(el, sibling, newStatus)
    })
  }

  getId(el: Element) {
    return el.id
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

    return { taskEl, deleteButtonEl }
  }
}
