<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getBookById } from '@/services/books'
import { getAuthorById } from '@/services/authors'
import { useRoute } from 'vue-router'

const book = ref({
  id: 0,
  title: '',
  year: 0,
  authorName: ''
})

const fetchBook = async () => {
  const { id } = useRoute().params
  const bookData = await getBookById(Number(id))
  const author = await getAuthorById(bookData.author_id)
  book.value = {
    id: bookData.id,
    title: bookData.title,
    year: bookData.year,
    authorName: author.name
  }
}

onMounted(fetchBook)
</script>

<template>
  <div v-if="book.title">
    <h1>{{ book.title }}</h1>
    <p>Author: {{ book.authorName }}</p>
    <p>Year: {{ book.year }}</p>
  </div>
  <div v-else>
    <p>Book not found</p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

p {
  font-size: 1.2em;
  line-height: 1.6;
}
</style>
