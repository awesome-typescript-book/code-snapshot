import { EventListener } from './EventListener'
import { Task } from './Task'
import { TaskCollection } from './TaskCollection'

class Application {
  private readonly eventListener = new EventListener()
  private readonly taskCollection = new TaskCollection()

  start() {
    const createForm = document.getElementById('createForm') as HTMLElement

    this.eventListener.add('submit-handler', 'submit', createForm, this.handleSubmit)
  }

  private handleSubmit = (e: Event) => {
    e.preventDefault()

    const titleInput = document.getElementById('title') as HTMLInputElement

    if (!titleInput.value) return

    const task = new Task({ title: titleInput.value })

    this.taskCollection.add(task)
    console.log(this.taskCollection)
  }
}

window.addEventListener('load', () => {
  const app = new Application()
  app.start()
})
