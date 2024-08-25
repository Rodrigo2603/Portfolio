import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

import Script from 'next/script';
import NavBar from "../components/NavBar";
import theme from "../theme";

const PageWrapper = ({ children }) => (
  <div className="container">
    <NavBar />
    <main className="main">{children}</main>
  </div>
);

function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const pathToTitle = {
    "/": "Rodrigo Rocha - Desenvolvedor Full Stack",
  };

<script async src="https://www.googletagmanager.com/gtag/js?id=G-DT8FV1T0WD"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DT8FV1T0WD');
</script>

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pathToTitle[pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default App;
