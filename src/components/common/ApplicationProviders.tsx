import { FC } from 'react';
import { LocalizationProvider } from '@mui/lab';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import DateAdapter from '@mui/lab/AdapterMoment';
import theme from '@theme';

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
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider locale='en' dateAdapter={DateAdapter}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
