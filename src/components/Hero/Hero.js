import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There! I'm <br />
        Geoffrey Moluba <br />
        Software Engineer Full Stack
      </SectionTitle>
      <SectionText>
      Count me in among your team of passionate developers who are striving to integrate innovative technologies to solve problems and improve upon existing method.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;