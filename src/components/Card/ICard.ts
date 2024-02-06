export interface ICard {
  id?: string
  title: string
  description: string
  category: number
  dueDate?: string
  cardColor?: number
  isImportant?: boolean,
  isCompleted?: boolean,
  createdDate?: string
  updatedDate?: string
}
