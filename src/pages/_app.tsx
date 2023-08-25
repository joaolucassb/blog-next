import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global-style';
import { theme } from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
