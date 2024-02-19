interface ITodoItemCard {
  id?: string
  title: string
  description: string
  category: number
  dueDate?: string
  cardColor: number
  isImportant: boolean
  isCompleted: boolean
  createdDate?: string
  updatedDate?: string
}

export { type ITodoItemCard }
