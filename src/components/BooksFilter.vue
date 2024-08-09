<script setup>
const emit = defineEmits(['filterTitle'])

const filterTitle = (event) => {
  emit('filterTitle', event.target.value)
}
// TODO: Add style
</script>

<template>
  <form>
    <label for="filter-title"> Title </label>
    <div id="filter-title">
      <input type="text" @input="filterTitle" placeholder="Title" />
    </div>
  </form>
</template>
