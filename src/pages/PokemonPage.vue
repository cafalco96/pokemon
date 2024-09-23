<template>
  <h1 v-if="!pokemon">Please wait ....</h1>
  <div v-else>
    <div class="lifes-container">
      <div>
        <h3>Status:</h3>
        <span>{{ count }}</span>
        <hr />
        <hr />
        <span>{{ status }}</span>
      </div>
      <div>
        <span>❤️</span>
        <p>{{ lifes }}</p>
      </div>
    </div>
    <h1>Who is this Pokemon</h1>
    <PokemonImage
      :pokemonId="pokemon.id"
      :showPokemon="showPokemon"
    ></PokemonImage>
    <PokemonOptions
      :pokemons="pokemonsArr"
      @pokemon-selected="checkAnswer"
      :is-disabled="showAnswer"
    ></PokemonOptions>
    <template v-if="showAnswer" class="fade-in">
      <h2 :class="success ? 'is-succefull' : 'is-wrong'">{{ message }}</h2>
      <button @click="newGame" class="game--pokemon-new-game">
        {{ lifes < 1 ? "Play Again" : "Next" }}
      </button>
      <h3 v-show="lifes < 1">{{ finalMessage }}</h3>
    </template>
  </div>
</template>
<script setup>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import getpokemonsOptions from "@/helpers/getPokemonOption";
import { onMounted, reactive, ref } from "vue";

let pokemonsArr = reactive([]);
let pokemon = ref(null);
let showPokemon = ref(false);
let showAnswer = ref(false);
let success = ref(false);
let finalMessage = ref("");
let count = ref(0);
const message = ref("");
let lifes = ref(3);
let status = ref("😃");
const mixPokemonsArray = async () => {
  pokemonsArr = await getpokemonsOptions();
  const rndInt = Math.floor(Math.random() * 4);
  pokemon.value = pokemonsArr[rndInt];
};
const checkAnswer = (selectedPokemonId) => {
  showAnswer.value = true;
  showPokemon.value = true;
  if (selectedPokemonId == pokemon.value.id) {
    message.value = `That's right, it is ${pokemon.value.name}`;
    success.value = true;
    count.value++;
    return;
  }
  message.value = `Soo sorry, it was ${pokemon.value.name}`;
  lifes.value--;
  status.value = "😞";
};
const newGame = () => {
  if (lifes.value == 0) {
    lifes.value = 3;
    count.value = 0;
  }
  showAnswer.value = false;
  showPokemon.value = false;
  pokemon.value = null;
  success.value = false;
  status.value = "😃";
  if (count.value < 2) {
    finalMessage.value = "Keep practicing to learn more about Pokemons";
  } else if (count.value < 5) {
    finalMessage.value = "Not bad, you know about Pokemon";
  } else {
    finalMessage.value = "Wow, you are an expert";
  }
  mixPokemonsArray();
};
onMounted(() => {
  mixPokemonsArray();
});
</script>

<style>
.game--pokemon-new-game {
  border-radius: 5px;
  background-color: black;
  color: white;
  padding: 8px 14px;
  text-transform: capitalize;
}
.game--pokemon-new-game:hover {
  opacity: 0.8;
  cursor: pointer;
}
.is-succefull {
  color: #50c878;
}
.is-wrong {
  color: #b22222;
}
.lifes-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 40px;
}
.lifes-container div {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  align-items: center;
}
</style>
