import type { ApiResponse, ContactForm, Service } from '../types'

const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  return res.json() as Promise<T>
}

export const api = {
  getServices: () =>
    request<ApiResponse<Service[]>>('/services'),

  submitContact: (data: ContactForm) =>
    request<ApiResponse<null>>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),
}
