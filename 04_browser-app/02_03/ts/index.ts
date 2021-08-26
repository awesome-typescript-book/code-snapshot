import { EventListener } from './EventListener'

class Application {
  start() {
    const eventListener = new EventListener()
    const button = document.getElementById('deleteAllDoneTask')

    if (!button) return

    eventListener.add(
      'sample',
      'click',
      button,
      () => alert('clicked'),
    )
  }
}

window.addEventListener('load', () => {
  const app = new Application()
  app.start()
})
