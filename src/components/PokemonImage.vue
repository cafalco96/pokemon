<template>
  <div class="game--pokemon-image-container">
    <img
      :src="imgUrl"
      alt="pokemon"
      class="hidden-pokemon"
    />
    <img
    v-if="showPokemon"
      :src="imgUrl"
      alt="pokemon"
      class="fade-in"
    />
  </div>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
  pokemonId: {
    type: Number,
    required: true,
  },
  showPokemon: {
    type: Boolean,
    required: true,
    default: false,
  }
});
const imgUrl = computed(()=>`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokemonId}.svg`);
</script>
<style scoped>
.game--pokemon-image-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
