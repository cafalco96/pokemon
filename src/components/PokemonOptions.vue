<template>
  <div class="game--pokemon-options-container">
    <ul>
      <li v-for="pokemon in props.pokemons" :key="pokemon.id">
        <button
          @click="$emit('pokemonSelected', pokemon.id)"
          :disabled="isDisabled"
        >
          {{ pokemon.name }}
        </button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  pokemons: {
    type: Array,
    required: true,
  },
  isDisabled: {
    type: Boolean,
    required: true,
    default: false,
  },
});
</script>
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: white;
  margin-bottom: 10px;
  width: 250px;
  border-radius: 5px;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
button {
  margin: 0;
  padding: 0;
  background: inherit;
  width: 100%;
  cursor: pointer;
  text-transform: capitalize;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

.game--pokemon-options-container {
  display: flex;
  justify-content: center;
}
</style>
