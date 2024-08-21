<script setup>
const emit = defineEmits(['filterTitle'])

const filterTitle = (event) => {
  emit('filterTitle', event.target.value)
}
// TODO: Add style
</script>

<template>
  <form>
    <div id="filter-title">
      <input type="text" @input="filterTitle" placeholder="Title" />
    </div>
  </form>
</template>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
}

input {
  font-size: 1.2em;
  padding: 5px;
  width: 100%;
}

input::placeholder {
  font-style: italic;
}
</style>
