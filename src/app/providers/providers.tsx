import { FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';
import store, { persistor } from '@/app/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Fallback } from "@/shared/ui/fallback/fallback";
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface IProviders {
    readonly children: JSX.Element;
}

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});



export const Providers: FC<IProviders> = ({ children }) => {
    return (
        <ErrorBoundary FallbackComponent={Fallback}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ThemeProvider theme={theme}>{children}</ThemeProvider>
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    );
};
