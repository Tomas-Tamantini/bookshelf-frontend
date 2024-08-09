<template>
  <div class="about">
    <h1>About This Project</h1>
    <p>
      A website where people manage their favorite books. It's built as the final project for the
      awesome
      <a href="https://fastapidozero.dunossauro.com/" target="_blank" rel="noopener noreferrer"
        >FastAPI do Zero</a
      >
      course.
    </p>
    <p>
      Checkout the detailed project requirements
      <a
        href="https://fastapidozero.dunossauro.com/14/#o-projeto"
        target="_blank"
        rel="noopener noreferrer"
        >here</a
      >.
    </p>
    <p>
      See the source code for the
      <a
        href="https://github.com/Tomas-Tamantini/bookshelf"
        target="_blank"
        rel="noopener noreferrer"
        >backend</a
      >
      and for the
      <a
        href="https://github.com/Tomas-Tamantini/bookshelf-frontend"
        target="_blank"
        rel="noopener noreferrer"
        >frontend</a
      >
    </p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.about h1 {
  font-size: 2em;
  margin-bottom: 10px;
}

.about p {
  font-size: 1.2em;
  line-height: 1.6;
}

.about a {
  color: #42b983;
  text-decoration: none;
}

.about a:hover {
  text-decoration: underline;
}
</style>
