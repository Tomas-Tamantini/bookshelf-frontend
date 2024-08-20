import { API_URL } from '/config'

interface Book {
  id: number
  title: string
  author_id: number
  year: number
}

interface BooksResponse {
  books: Book[]
  total: number
}

const endpointUrl = `${API_URL}/books`

export const getBooks = async (partialTitle: string): Promise<BooksResponse> => {
  const response = await fetch(`${endpointUrl}?title=${partialTitle}`)
  return response.json()
}

export const getBookById = async (id: number): Promise<Book> => {
  const response = await fetch(`${endpointUrl}/${id}`)
  return response.json()
}
