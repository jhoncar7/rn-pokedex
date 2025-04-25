import axios from 'axios';

export const pokeApi = axios.create({
    baseURL: 'https://pokeapi.com/api/v2'
});