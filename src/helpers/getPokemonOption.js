import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonsArr = Array.from(Array(650));

  return pokemonsArr.map((_, i) => i + 1);
};

const getPokemonsOptions = async () => {
  const pokemonsMixed = getPokemons().sort(() => Math.random() - 0.5);
  // getPokemonsName(pokemonsMixed.splice(0,4));
  const pokemons = await getPokemonsName(pokemonsMixed);
  return pokemons;
};

// const getPokemonsName = (pokemons=[])=> {
//   console.log(pokemons);

// }

const getPokemonsName = async ([a, b, c, d]) => {
  // const res= await pokemonApi.get(`/${a}`);
  const promisesRes = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [p1, p2, p3, p4] = await Promise.all(promisesRes);
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id },
  ];
};
export default getPokemonsOptions;
