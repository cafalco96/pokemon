<template>
  <div class="bg-index">
    <div>
      <h1>How much do you know about Pokémon?</h1>
      <button @click="$emit('startGame')">Let's Start</button>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.bg-index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url("../assets/indexbg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
h1 {
  font-size: 3rem;
  color: #ccce0e;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
}
button {
  background-color: #ccce0e;
  color: #000000;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.8);
  font-size: 1.2rem;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  opacity: 0.8;
}

.bg-index div {
  max-width: 400px;
  margin: 0 20px;
}
</style>
