<script setup lang="ts">
import BooksFilter from '@/components/BooksFilter.vue'
import { ref, onMounted } from 'vue'
import { getBooks } from '../services/books'
import { getAuthorById } from '../services/authors'

interface BookRow {
  id: number
  title: string
  year: number
  authorName: string
}
const partialTitle = ref('')

const bookRows = ref<BookRow[]>([])
const totalBooks = ref(0)

const fetchBooks = async () => {
  const { total, books } = await getBooks(partialTitle.value)
  totalBooks.value = total
  bookRows.value = await Promise.all(
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

const handleFilterTitle = (title: string) => {
  // TODO: Add debounce
  partialTitle.value = title
  fetchBooks()
}

// TODO: Add pagination

// TODO: Add style

onMounted(fetchBooks)
</script>

<template>
  <div>
    <div>
      <BooksFilter @filterTitle="handleFilterTitle" />
    </div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in bookRows" :key="book.id">
          <td>{{ book.title }}</td>
          <td>{{ book.authorName }}</td>
          <td>{{ book.year }}</td>
          <td>
            <router-link :to="'/books/' + book.id">
              <img src="https://icongr.am/feather/eye.svg?size=20&color=ffffff" alt="Details" />
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <p>Total results: {{ totalBooks }}</p>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid white;
  padding: 8px;
}

th {
  background-color: #333;
  color: white;
}

tr:nth-child(even) {
  background-color: #444;
}

tr:hover {
  background-color: #555;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
}
</style>
