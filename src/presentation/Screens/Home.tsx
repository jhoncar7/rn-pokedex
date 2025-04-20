import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';

export const Home = () => {
    return (
        <View>
            <Text>Home</Text>

            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Press me
            </Button>
        </View>
    )
}
