import { FC } from 'react';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { QueryClient, QueryClientProvider } from 'react-query';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import theme from '@theme';

import {
  MuiThemeProvider,
  CssBaseline,
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core';

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
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MuiPickersUtilsProvider
          locale='en'
          libInstance={moment}
          utils={MomentUtils}
        >
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
};
