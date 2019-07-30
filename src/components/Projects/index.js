import React, { Component } from 'react';
import Spotify from '../../assets/Spotify-clone-React.jpeg';
import Pizzaria from '../../assets/pizzaria.jpeg';
import Apettite from '../../assets/apettite.jpeg';
import Modal from '../Modal';
import {
  ProjectsContainer,
  ProjectBox,
  ProjectHeader,
  ProjectTitle,
  ProjectImageBox,
  ProjectImage,
  ProjectTech,
  TechName,
  MinTechName,
  ProjectFooter,
  ProjectLinks,
  GitIcon,
} from './styles';

export default class Projects extends Component {
  state = {
    visible: false,
    image: '',
  };

  handleImageClick = (image) => {
    this.setState({ image });
    this.handleToggleOpen();
  };

  handleToggleOpen = () => {
    this.setState({ visible: true });
  };

  handleToggleClose = () => {
    this.setState({ visible: false, image: '' });
  };

  render() {
    const { visible, image } = this.state;
    return (
      <ProjectsContainer>
        <ProjectBox>
          <ProjectHeader>
            <ProjectTitle>Spotify Clone</ProjectTitle>
          </ProjectHeader>
          <ProjectImageBox onClick={() => this.handleImageClick(Spotify)}>
            <ProjectImage src={Spotify} alt="Spotify Clone" />
          </ProjectImageBox>
          <ProjectTech>
            <TechName>React</TechName>
            <TechName>Redux</TechName>
            <TechName>Redux-saga</TechName>
            <MinTechName>JavaScript</MinTechName>
            <MinTechName>HTML</MinTechName>
            <MinTechName>CSS</MinTechName>
            <MinTechName>Reactotron</MinTechName>
            <MinTechName>Insominia</MinTechName>
            <MinTechName>Styled-Components</MinTechName>
            <MinTechName>Redux-saga</MinTechName>
            <MinTechName>Axios</MinTechName>
          </ProjectTech>
          <ProjectFooter>
            <ProjectLinks target="_blank" href="https://github.com/FelipeGCastro/spotify-clone">
              <GitIcon />
            </ProjectLinks>
          </ProjectFooter>
        </ProjectBox>
        <ProjectBox>
          <ProjectHeader>
            <ProjectTitle>Pizzaria Store App</ProjectTitle>
          </ProjectHeader>
          <ProjectImageBox onClick={() => this.handleImageClick(Pizzaria)}>
            <ProjectImage src={Pizzaria} alt="Apettite" />
          </ProjectImageBox>
          <ProjectTech>
            <TechName>React</TechName>
            <TechName>React Native</TechName>
            <TechName>Nodejs</TechName>
            <MinTechName>Redux</MinTechName>
            <MinTechName>Adonisjs</MinTechName>
            <MinTechName>Redux-saga</MinTechName>
            <MinTechName>HTML</MinTechName>
            <MinTechName>CSS</MinTechName>
            <MinTechName>Styled-Components</MinTechName>
            <MinTechName>Axios</MinTechName>
            <MinTechName>Reactotron</MinTechName>
            <MinTechName>Insominia</MinTechName>
          </ProjectTech>
          <ProjectFooter>
            <ProjectLinks target="_blank" href="https://github.com/FelipeGCastro/PizzariaMobile">
              <GitIcon />
              Mobile
            </ProjectLinks>
            <ProjectLinks target="_blank" href="https://github.com/FelipeGCastro/PizzariaWeb">
              <GitIcon />
              Web
            </ProjectLinks>
          </ProjectFooter>
        </ProjectBox>
        <ProjectBox>
          <ProjectHeader>
            <ProjectTitle>Apettite - Personal Project</ProjectTitle>
          </ProjectHeader>
          <ProjectImageBox onClick={() => this.handleImageClick(Apettite)}>
            <ProjectImage src={Apettite} alt="Apettite" />
          </ProjectImageBox>
          <ProjectTech>
            <TechName>React Native</TechName>
            <TechName>Node.js</TechName>
            <MinTechName>Redux</MinTechName>
            <MinTechName>Adonisjs</MinTechName>
            <MinTechName>Redux-saga</MinTechName>
            <MinTechName>HTML</MinTechName>
            <MinTechName>CSS</MinTechName>
            <MinTechName>Styled-Components</MinTechName>
            <MinTechName>Axios</MinTechName>
            <MinTechName>Reactotron</MinTechName>
            <MinTechName>Insominia</MinTechName>
            <MinTechName>Facebook-Login</MinTechName>
            <MinTechName>AWS(S3)</MinTechName>
          </ProjectTech>
          <ProjectFooter>
            <ProjectLinks target="_blank" href="https://github.com/FelipeGCastro/Apettite">
              <GitIcon id="courses" />
            </ProjectLinks>
          </ProjectFooter>
        </ProjectBox>
        <Modal visible={visible} image={image} onRequestClose={this.handleToggleClose} />
      </ProjectsContainer>
    );
  }
}
