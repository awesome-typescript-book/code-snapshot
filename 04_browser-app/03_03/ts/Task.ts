import { v4 as uuid } from 'uuid'

export class Task {
  readonly id
  title

  constructor(properties: { title: string }) {
    this.id = uuid()
    this.title = properties.title
  }
}
