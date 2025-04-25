import { pokeApi } from '../../config/api/pokeApi';
import { Pokemon } from '../../domain/entities/pokemon';
import type { PokeAPIPaginatedResponse, PokeAPIPokemon } from '../../infrastructure/interfaces/pokeApi.interfaces';
import { PokemonMapper } from '../../infrastructure/mappers/pokemon.mapper';

export const getPokemons = async (page: number, limit: number): Promise<Pokemon[]> => {

    console.log('llamada a getPokemon!');

    try {
        const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
        const { data } = await pokeApi.get<PokeAPIPaginatedResponse>(url);

        const pokemonPromises = data.results.map(info => {
            return pokeApi.get<PokeAPIPokemon>(info.url);
        });

        const pokeApiPokemons = await Promise.all(pokemonPromises);
        const pokemons = pokeApiPokemons.map(item => PokemonMapper.pokeApiPokemonsToEntity(item.data))

        console.log({ pokemons });

        return pokemons;

    } catch (error) {
        console.log(error);
        throw new Error('Error getPokemons')
    }
}