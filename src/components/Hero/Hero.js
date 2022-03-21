import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typical from 'react-typical';


const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi There!<br />
        I'm Geoffrey Moluba <br />
        <p>
          <Typical 
            loop={Infinity}
            wrapper="b"
            steps={[
              'Software Engineer',
              1000,
              'Front-End',
              1000,
              'Back-End',
              1000,
              'Full Stack',
              1000
            ]}
          />
        </p>
      </SectionTitle>
      <SectionText>
      Count me in among your team of passionate developers who are striving to integrate innovative technologies to solve problems and improve upon existing method.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;