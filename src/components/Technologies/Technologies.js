import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiAngularSimple,
  DiJavascript,
  DiJqueryLogo,
  DiNodejsSmall,
  DiMongodb
} from "react-icons/di";
import { CgFigma } from "react-icons/cg";
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
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies from front end to back as well as
      design.
    </SectionText>
    <List>
      <ListItem>
        <view style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <DiReact size="3rem" />
          <DiAngularSimple size="3rem" />
          <DiJavascript size="3rem" />
          <DiJqueryLogo size="3rem" />
        </view>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, ReactAngular JavaScript & JQuery
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <view style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <DiFirebase size="3rem" />
          <DiNodejsSmall size="3rem" />
          <DiMongodb size="3rem" />
        </view>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <view style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <DiZend size="3rem" />
          <CgFigma size="3rem" />
        </view>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
