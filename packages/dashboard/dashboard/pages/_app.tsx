import { AppProps } from "next/app";
import { Provider as StyletronProvider } from "styletron-react";
import { DarkTheme, BaseProvider } from "baseui";
import { styletron } from "../src/styletron";

import "./styles.css";

export const App = ({ Component, pageProps }: AppProps) => (
  <StyletronProvider value={styletron}>
    <BaseProvider theme={DarkTheme}>
      <Component {...pageProps} />
    </BaseProvider>
  </StyletronProvider>
);

export default App;
