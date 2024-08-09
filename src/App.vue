<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <h1><RouterLink to="/">Bookshelf</RouterLink></h1>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </nav>
  </header>
  <div id="content"><RouterView /></div>
</template>

<style scoped>
header {
  background-color: #4caf50;
  padding: 10px;
  color: white;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin: 0;
  font-size: 24px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin-left: 20px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

#content {
  padding: 10px;
}
</style>
