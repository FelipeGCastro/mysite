import React, { Component } from 'react';

import Header from '../../components/Header';
import Skills from '../../components/Skills';
import About from '../../components/About';
import Courses from '../../components/Courses';
import Projects from '../../components/Projects';
import {
  Container,
  HeaderBar,
  HeaderMenu,
  MenuItem,
  MenuLink,
  SkillsHeader,
  GoTo,
  SkillsIcon,
  AboutIcon,
  HomeIcon,
  CoursesIcon,
  ProjectsIcon,
  LabelContainer,
  LabelIcon,
  LabelText,
} from './styles';

export default class Home extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <Container>
        <HeaderBar>
          <HeaderMenu>
            <MenuItem>
              <MenuLink href="#home">
                <HomeIcon />
                <GoTo className="menuName" href="#home">
                  Home
                </GoTo>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#about">
                <AboutIcon />
                <GoTo className="menuName" href="#about">
                  About
                </GoTo>
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink href="#skills">
                <SkillsIcon />
                <GoTo className="menuName" href="#skills">
                  Skills
                </GoTo>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#projects">
                <ProjectsIcon />
                <GoTo className="menuName" href="#projects">
                  Projects
                </GoTo>
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink href="#courses">
                <CoursesIcon />
                <GoTo className="menuName" href="#courses">
                  Courses
                </GoTo>
              </MenuLink>
            </MenuItem>
          </HeaderMenu>
        </HeaderBar>
        <Header />
        <About />

        <SkillsHeader>Skills</SkillsHeader>
        <Skills />
        <SkillsHeader>Projects</SkillsHeader>
        <Projects />
        <Courses />
        <LabelContainer>
          <LabelText>Made with React</LabelText>
          <LabelIcon />
        </LabelContainer>
      </Container>
    );
  }
}
