import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section raw nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, <br />
        I'm Christopher Mariano
      </SectionTitle>
      <SectionText>
        I'm a Blockchain Developer. I build and design Smart Contracts / Web3
        Apps with Solidity. I test and deploy them using
        Javascript/Typescript(Hardhat Environment). I mostly use Nextjs for
        building the UI. Please view some of my projects below. dApp(for the
        dApp site), Code-B(For github backend), Code-F(For github frontend).
        Please also do view my Github if you wish to view my other projects and
        experiments.
      </SectionText>
      <Button
        onclick={() => (window.location = "https://github.com/crys-cross")}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
