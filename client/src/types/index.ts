export interface Service {
  _id: string
  title: string
  description: string
  icon: string
  tags: string[]
  order: number
}

export interface ContactForm {
  name?: string
  email: string
  phone?: string
  message: string
}

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
}
