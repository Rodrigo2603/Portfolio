import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Jump from "react-reveal/Jump";
import { Link } from "react-scroll";

import styles from "../../styles/sections/Landing.module.css";
import { colors } from "../../theme";
import LinkIconBar from "../LinkIconBar";
import SectionContainer from "../SectionContainer";

const links = [ { label: "Github", icon: "github", url: "https://github.com/Rodrigo2603/"},
  { label: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/rodrigo-brickmann-rocha/"}
];

export default function Landing() {
  const primary = useColorModeValue(colors.primary.dark, colors.primary.light);
  const secondary = useColorModeValue(colors.secondary.light,colors.secondary.dark);

  const header = (
    <div className={styles.center}>
      <h1 className={styles.tagline} style={{ color: primary }}>
        Bem vindo! Meu nome é Rodrigo Rocha,{" "}
      </h1>
      <h1 className={styles.tagline} style={{ color: primary }}>
        {" "}
        e sou um <strong style={{ color: secondary }}>Desenvolvedor de Software.</strong>
      </h1>
    </div>
  );

  return (
    <SectionContainer id="landing" name="landing" headerText={header}>
      <LinkIconBar links={links} />
      <Link activeClass="active" to="sobre" spy smooth offset={-70} duration={500}>
        <VStack>
          <Text as="strong" _hover={{ color: secondary }} className={styles.learn}>
            Quem sou eu?
          </Text>
          <Jump forever duration={1500}>
            <BsChevronDown/>
          </Jump>
        </VStack>
      </Link>
    </SectionContainer>
  );
}
