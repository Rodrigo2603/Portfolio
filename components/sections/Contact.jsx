import { EmailIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { Grid } from "@material-ui/core";
import React from "react";

import SectionContainer from "../SectionContainer";

export default function Contact() {
  return (
    <SectionContainer id="contato" name="contato" headerText="Como entrar em contato?" useHeaderStyle>
      <Flex as={Grid} container item xs={9} sm={6} justify="center" textAlign="center" pl={4} pr={4}>
        <Text fontSize="xl" m="auto" mt={6}>
          Por favor, sinta-se à vontade para me enviar um e-mail caso tenha qualquer dúvida ou necessite de mais informações.
        </Text>
        <Button as={Link} leftIcon={<EmailIcon />} href="mailto:rodrigorocha1032@gmail.com" m="auto" mt={6}>
          Enviar Email
        </Button>
      </Flex>
    </SectionContainer>
  );
}
