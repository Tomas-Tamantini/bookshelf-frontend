<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in bookRows" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.authorName }}</td>
          <td>{{ book.year }}</td>
        </tr>
      </tbody>
    </table>
    <p>Total results: {{ totalBooks }}</p>
  </div>
</template>

<script lang="ts">
import { getBooks } from '../services/books'
import { getAuthorById } from '../services/authors'

interface BookRow {
  id: number
  title: string
  year: number
  authorName: string
}

export default {
  data() {
    return {
      bookRows: [],
      totalBooks: 0
    }
  },
  async created() {
    const { total, books }: BooksResponse = await getBooks()
    this.totalBooks = total
    this.bookRows = await Promise.all(
      books.map(async (book) => {
        const author = await getAuthorById(book.author_id)
        return {
          id: book.id,
          title: book.title,
          year: book.year,
          authorName: author.name
        }
      })
    )
  }
}
</script>
