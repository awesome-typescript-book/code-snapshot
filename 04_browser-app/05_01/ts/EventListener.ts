import { v4 as uuid } from 'uuid'

type Listeners = {
  [id: string]: {
    event: string
    element: HTMLElement
    handler: (e: Event) => void
  }
}

export class EventListener {
  private readonly listeners: Listeners = {}

  add(event: string, element: HTMLElement, handler: (e: Event) => void, listenerId = uuid()) {
    this.listeners[listenerId] = {
      event,
      element,
      handler,
    }

    element.addEventListener(event, handler)
  }

  remove(listenerId: string) {
    const listener = this.listeners[listenerId]

    if (!listener) return

    listener.element.removeEventListener(listener.event, listener.handler)

    delete this.listeners[listenerId]
  }
}
