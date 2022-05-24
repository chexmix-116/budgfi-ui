import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { ThemeProvider } from "styled-components";
import {minimisTheme} from "../lib/data/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={minimisTheme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
