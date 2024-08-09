import { API_URL } from '/config'

interface Author {
  id: number
  name: string
}

const endpointUrl = `${API_URL}/authors`

export const getAuthorById = async (id: number): Promise<Author> => {
  const response = await fetch(`${endpointUrl}/${id}`)
  return response.json()
}
