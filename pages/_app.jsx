import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

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

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pathToTitle[pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default App;
