import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider /> <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {" "}
      I've worked with a range a technologies in the web3 development world.
      From Blockchain, Back-end To Front-end
    </SectionText>
    <List>
      <ListItem>
        {/* <DiFirebase size="3rem" /> */}
        <ListContainer>
          <ListTitle>Blockchain</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tools like Hardhat <br />
            (Solidity and JavaScript)
          </ListParagraph>
        </ListContainer>
      </ListItem>{" "}
      <ListItem>
        {/* <DiFirebase size="3rem" /> */}
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Moralis
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        {/* <DiReact size="3rem" /> */}
        <ListContainer>
          <ListTitle>FrontEnd</ListTitle>
          <ListParagraph>
            Experience with <br />
            Next.Js, React.js <br />
            TailwindCSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
