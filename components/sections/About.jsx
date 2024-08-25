import {Link, Text, VStack} from "@chakra-ui/react";
import React from "react";
import SectionContainer from "../SectionContainer";

const Bio = () => (
    <VStack m="auto" w="75%" spacing="12px" pt="5%" textAlign="center">
      <Text>
        Olá! Eu sou um estudante de Ciência da Computação na {" "}
        <Link href="https://www.unioeste.br/" isExternal><strong>UNIOESTE</strong></Link>
        , atualmente quase finalizando o curso.
      </Text>
      <Text>
        Estou em busca de oportunidades de vagas de desenvolvedor onde possa ganhar mais experiência na área, aplicando
        os conhecimentos adquiridos durante a graduação, me tornando um profissional mais qualificado no mercado. 
      </Text>
    </VStack>
);

export default function About() {
  return (
    <SectionContainer id="sobre" name="sobre" headerMt="-5%" headerText="Sobre Mim" justifyContent="center" alignItems="center" useHeaderStyle>
        <Bio/>
    </SectionContainer>
  );
}
