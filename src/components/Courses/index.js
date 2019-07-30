import React, { Component } from 'react';
import Rocketseat from '../../assets/rocketseat.jpg';
import Certificate from '../../assets/certificate.jpeg';

import Modal from '../Modal';

import {
  CoursesContainer,
  CoursesBox,
  CoursesTitle,
  CourseTitle,
  // CoursesText,
  LinkIcon,
  CourseName,
  CourseDescription,
  CourseContainer,
  CourseCertificate,
  CopyIcon,
  LinkButton,
  CourseImage,
} from './styles';

export default class Courses extends Component {
  state = {
    code: '19050ac0-637f-48fa-b1bb-fe1d85e23ae9',
    visible: false,
    image: '',
  };

  handleCodeClick = () => {
    const { code } = this.state;
    const textArea = document.createElement('textarea');
    textArea.value = code;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
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
      <CoursesContainer>
        <CoursesTitle>Courses</CoursesTitle>
        <CoursesBox>
          <CourseContainer>
            <CourseImage src={Rocketseat} alt="RocketSeat" />
            <CourseTitle>RocketSeat.com.br</CourseTitle>
            <LinkButton target="_blank" href="https://rocketseat.com.br/bootcamp">
              <LinkIcon />
            </LinkButton>
          </CourseContainer>

          <CourseName>
            <CourseTitle>Bootcamp GoStack</CourseTitle>
          </CourseName>
          <CourseDescription>
            <CourseTitle>NodeJS, ReactJS e React Native</CourseTitle>
          </CourseDescription>
          <CourseCertificate
            onClick={() => this.handleImageClick(Certificate)}
            src={Certificate}
            alt="Certificate Rocketseat"
          />

          <CourseDescription>
            <CourseTitle>Certificate Code </CourseTitle>
            <CopyIcon onClick={this.handleCodeClick} />
          </CourseDescription>
          <CourseDescription>
            <CourseTitle>certificado.rocketseat.com.br</CourseTitle>
            <LinkButton target="_blank" href="https://rocketseat.com.br/certificados">
              <LinkIcon />
            </LinkButton>
          </CourseDescription>
        </CoursesBox>
        <Modal visible={visible} image={image} onRequestClose={this.handleToggleClose} />
      </CoursesContainer>
    );
  }
}
