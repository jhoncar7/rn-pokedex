import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './navigator/StackNavigator';
// import { PaperProvider } from 'react-native-paper';
import { ThemeContextProvider } from './context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


// https://reactnativepaper.com/

// https://tanstack.com/query/latest/docs/framework/react/quick-start
const queryClient = new QueryClient()

export const PokedexApp = () => {
    return (
        <QueryClientProvider client={queryClient}>

            {/* <PaperProvider> */}
            {/* <NavigationContainer> */}
            <ThemeContextProvider>
                <StackNavigator />
            </ThemeContextProvider>
            {/* </NavigationContainer> */}
            {/* </PaperProvider> */}
        </QueryClientProvider>
    )
}