<template>
  <div class="card">
    <h3>{{ food.name }}</h3>
    <p>Rp {{ food.price }}</p>
    <button @click="$emit('add', food)">Tambah</button>
  </div>
</template>

<script>
export default {
  props: ['food']
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 15px;
  width: 200px;
  background: white;
}
button {
  margin-top: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
}
</style>
