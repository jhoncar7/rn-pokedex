import { StyleSheet, View } from 'react-native';
import { getPokemons } from '../../actions/pokemons';
import { useQuery } from '@tanstack/react-query';
import { PokeBallBg } from '../components/pokemons/ui/PokeBallBg';
import { useEffect, useState } from 'react';

export const Home = () => {

    const { isLoading, data = [] } = useQuery({
        queryKey: ['pokemons'],
        queryFn: () => getPokemons(0, 0),
        // staleTime: 1000 * 60 * 60, // 60 minutos
        staleTime: 1000 * 60, // 1 minuto
    });

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        console.log('llamo a https://pokeapi.co/api/v2/pokemon/1');
        fetch('https://pokeapi.co/api/v2/pokemon/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setPokemon(data);
            })
            .catch(err => {
                setError(err.message);
                console.error('Fetch error:', err);
            });
    }, []);


    return (
        <View>
            <PokeBallBg style={styles.imgPosition} />
        </View>
    )
}


const styles = StyleSheet.create({
    imgPosition: {
        position: 'absolute',
        top: -100,
        right: -100
    }
});