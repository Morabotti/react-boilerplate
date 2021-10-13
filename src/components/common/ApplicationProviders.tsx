import { FC } from 'react';
import { LocalizationProvider } from '@mui/lab';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { StylesProvider, createGenerateClassName } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterMoment';
import theme from '@theme';

const className = createGenerateClassName({
  productionPrefix: 'r'
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 2 * 60 * 1000,
      cacheTime: 4 * 60 * 1000,
      retry: 0
    }
  }
});

interface Props {
  children: React.ReactNode;
}

export const ApplicationProviders: FC<Props> = ({ children }: Props) => {
  return (
    <StylesProvider injectFirst generateClassName={className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider locale='en' dateAdapter={DateAdapter}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </StylesProvider>
  );
};
