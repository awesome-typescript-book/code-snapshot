import { EventListener } from './EventListener'
import { Status, Task, statusMap } from './Task'
import { TaskCollection } from './TaskCollection'
import { TaskRenderer } from './TaskRenderer'

class Application {
  private readonly eventListener = new EventListener()
  private readonly taskCollection = new TaskCollection()
  private readonly taskRenderer = new TaskRenderer(
    document.getElementById('todoList') as HTMLElement,
    document.getElementById('doingList') as HTMLElement,
    document.getElementById('doneList') as HTMLElement,
  )

  start() {
    const taskItems = this.taskRenderer.renderAll(this.taskCollection)
    const createForm = document.getElementById('createForm') as HTMLElement
    const deleteAllDoneTaskButton = document.getElementById('deleteAllDoneTask') as HTMLElement

    taskItems.forEach(({ task, deleteButtonEl }) => {
      this.eventListener.add('click', deleteButtonEl, () => this.handleClickDeleteTask(task), task.id)
    })

    this.eventListener.add('submit', createForm, this.handleSubmit)
    this.eventListener.add('click', deleteAllDoneTaskButton, this.handleClickDeleteAllDoneTasks)

    this.taskRenderer.subscribeDragAndDrop(this.handleDropAndDrop)
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault()

    const titleInput = document.getElementById('title') as HTMLInputElement

    if (!titleInput.value) return

    const task = new Task({ title: titleInput.value })

    this.taskCollection.add(task)

    const { deleteButtonEl } = this.taskRenderer.append(task)

    this.eventListener.add(
      'click',
      deleteButtonEl,
      () => this.handleClickDeleteTask(task),
      task.id,
    )

    titleInput.value = ''
  }

  private executeDeleteTask = (task: Task) => {
    this.eventListener.remove(task.id)
    this.taskCollection.delete(task)
    this.taskRenderer.remove(task)
  }

  private handleClickDeleteTask = (task: Task) => {
    if (!window.confirm(`「${task.title}」を削除してよろしいですか？`)) return

    this.executeDeleteTask(task)
  }

  private handleClickDeleteAllDoneTasks = () => {
    if (!window.confirm('DONE のタスクを一括削除してよろしいですか？')) return

    const doneTasks = this.taskCollection.filter(statusMap.done)

    doneTasks.forEach((task) => this.executeDeleteTask(task))
  }

  private handleDropAndDrop = (el: Element, sibling: Element | null, newStatus: Status) => {
    const taskId = this.taskRenderer.getId(el)

    if (!taskId) return

    const task = this.taskCollection.find(taskId)

    if (!task) return

    task.update({ status: newStatus })
    this.taskCollection.update(task)

    if (sibling) {
      const nextTaskId = this.taskRenderer.getId(sibling)

      if (!nextTaskId) return

      const nextTask = this.taskCollection.find(nextTaskId)

      if (!nextTask) return

      this.taskCollection.moveAboveTarget (task, nextTask)
    } else {
      this.taskCollection.moveToLast(task)
    }
  }
}

window.addEventListener('load', () => {
  const app = new Application()
  app.start()
})
