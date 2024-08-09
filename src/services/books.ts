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

export const getBooks = async (): Promise<BooksResponse> => {
  const response = await fetch(endpointUrl)
  return response.json()
}
