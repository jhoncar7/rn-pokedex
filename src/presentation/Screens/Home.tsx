import { StyleSheet, View } from 'react-native';
import { getPokemons } from '../../actions/pokemons';
import { useQuery } from '@tanstack/react-query';
import { PokeBallBg } from '../components/pokemons/ui/PokeBallBg';

export const Home = () => {

    const { isLoading, data = [] } = useQuery({
        queryKey: ['pokemons'],
        queryFn: () => getPokemons(0, 0),
        // staleTime: 1000 * 60 * 60, // 60 minutos
        staleTime: 1000 * 60, // 1 minuto
    });


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