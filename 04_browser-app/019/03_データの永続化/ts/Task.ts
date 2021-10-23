import { v4 as uuid } from 'uuid'

export const statusMap = {
  todo: 'TODO',
  doing: 'DOING',
  done: 'DONE',
} as const
export type Status = typeof statusMap[keyof typeof statusMap]

export class Task {
  readonly id
  title
  status

  constructor(properties: { id?: string, title: string, status?: Status }) {
    this.id = properties.id || uuid()
    this.title = properties.title
    this.status = properties.status || statusMap.todo
  }

  update(properties: { title?: string; status?: Status }) {
    this.title = properties.title || this.title
    this.status = properties.status || this.status
  }
}
