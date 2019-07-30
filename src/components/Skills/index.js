import React from 'react';
import { ReactComponent as Logo } from '../../assets/javascript.svg';

import {
  SkillsContainer,
  SkillBox,
  SkillBoxDown,
  SkillName,
  ReactIcon,
  NodeIcon,
  HTMLIcon,
  CSSIcon,
  ProgressContainer,
  ProgressBarReact,
  ProgressBarNode,
  ProgressBarNative,
  ProgressBarHTML,
  ProgressBarCSS,
  ProgressBarJS,
} from './styles';

const Skills = () => (
  <SkillsContainer>
    <SkillBox>
      <SkillName>React.Js</SkillName>
      <ReactIcon />
      <ProgressContainer>
        <ProgressBarReact />
      </ProgressContainer>
    </SkillBox>
    <SkillBox>
      <SkillName>Node.js</SkillName>
      <NodeIcon />
      <ProgressContainer>
        <ProgressBarNode />
      </ProgressContainer>
    </SkillBox>
    <SkillBox>
      <SkillName>React Native</SkillName>
      <ReactIcon />
      <ProgressContainer>
        <ProgressBarNative />
      </ProgressContainer>
    </SkillBox>
    <SkillBoxDown>
      <SkillName>HTML</SkillName>
      <HTMLIcon />
      <ProgressContainer>
        <ProgressBarHTML />
      </ProgressContainer>
    </SkillBoxDown>
    <SkillBoxDown>
      <SkillName>CSS</SkillName>
      <CSSIcon />
      <ProgressContainer>
        <ProgressBarCSS />
      </ProgressContainer>
    </SkillBoxDown>
    <SkillBoxDown>
      <SkillName>JavaScript</SkillName>
      <Logo fill="white" style={{ width: 70, height: 70 }} />
      <ProgressContainer id="projects">
        <ProgressBarJS />
      </ProgressContainer>
    </SkillBoxDown>
  </SkillsContainer>
);

export default Skills;
