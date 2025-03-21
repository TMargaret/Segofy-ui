<script lang="ts" setup>


</script>

<template>
  <div class="wrapper">
    <form>
      <h3 class="mb-6 pb-2">Create domain</h3>
      <label for="name">Name</label>
      <input type="text" id="name" placeholder="Name" />
      <label for="url">URL</label>
      <input type="text" id="url" placeholder="URL" />
      <button type="submit">Add</button>
    </form>
  </div>

</template>

<style scoped>
.wrapper {
  display: block;
  margin: 20px;
}

form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

form input {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
