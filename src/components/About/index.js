import React from 'react';

import {
  AboutContainer,
  AboutBox,
  AboutTitle,
  AboutText,
  SocialBox,
  FaGithubIcon,
  FaLinkedinIcon,
  FaFacebookFIcon,
  SocialContainer,
  SocialName,
} from './styles';

const About = () => (
  <AboutContainer>
    <AboutBox>
      <AboutTitle>About me</AboutTitle>
      <AboutText>
        I am starting my career as developer. I am currently looking for an opportunity to gain
        professional experience and improve my skills. I am creative, fast learner, development
        enthusiastic, proactive and friendly.
      </AboutText>
      <SocialContainer id="skills">
        <SocialBox target="_blank" href="https://github.com/FelipeGCastro">
          <FaGithubIcon />
          <SocialName>GitHub</SocialName>
        </SocialBox>
        <SocialBox target="_blank" href="https://www.linkedin.com/in/luizfelipecastro/">
          <FaLinkedinIcon />
          <SocialName>Linkedin</SocialName>
        </SocialBox>
        <SocialBox target="_blank" href="https://www.facebook.com/luizfelipe.castro.9">
          <FaFacebookFIcon />
          <SocialName>Facebook</SocialName>
        </SocialBox>
      </SocialContainer>
    </AboutBox>
  </AboutContainer>
);

export default About;
