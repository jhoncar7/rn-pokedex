import { createContext, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme, PaperProvider } from 'react-native-paper';
// import {
//     Provider as PaperProvider,
//     MD3LightTheme as PaperLightTheme,
//     MD3DarkTheme as PaperDarkTheme,
// } from 'react-native-paper';

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

// import merge from 'deepmerge';

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationDefaultTheme,
    reactNavigationDark: NavigationDarkTheme,
});


// const CombinedDefaultTheme = merge(PaperLightTheme, NavigationDefaultTheme);
// const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

export const ThemeContext = createContext({
    isDark: false,
    theme: LightTheme
    // theme: CombinedDefaultTheme
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {

    const colorScheme = useColorScheme();

    const isDark = colorScheme === 'dark';
    const theme = isDark ? DarkTheme : LightTheme;
    // const theme = isDark ? CombinedDarkTheme : CombinedDefaultTheme;

    return (
        <PaperProvider>
            <NavigationContainer theme={theme as any}>
                <ThemeContext.Provider value={{
                    isDark,
                    theme,
                }}>
                    {children}
                </ThemeContext.Provider>
            </NavigationContainer>
        </PaperProvider>
    );
}