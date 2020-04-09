import React from 'react';
import Perfil from '../../assets/Eu.jpeg';
import moment from 'moment'

import {
  InfoContainer,
  EmailContainer,
  LocationContainer,
  Email,
  EmailIcon,
  LocationIcon,
  Location,
  NationalityIcon,
  AgeIcon,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  ProfileOcupation,
} from './styles';

const Header = () => {
  return (
  <ProfileContainer id="home">
    <ProfileImage src={Perfil} alt="Profile" />
    <ProfileName>Luiz Felipe Castro</ProfileName>
    <ProfileOcupation>Front-End Developer</ProfileOcupation>
    <InfoContainer>
      <EmailContainer>
        <EmailIcon />
        <Email>felipe1693@gmail.com</Email>
      </EmailContainer>
      <EmailContainer>
        <AgeIcon />
        <Email>{moment().diff(moment('16-09-1993', 'DD-MM-YYYY'), 'years')} years old</Email>
      </EmailContainer>
      <LocationContainer>
        <LocationIcon />
        <Location>Lisbon, Portugal</Location>
      </LocationContainer>
      <LocationContainer id="about">
        <NationalityIcon />
        <Location>Brazilian</Location>
      </LocationContainer>
    </InfoContainer>
  </ProfileContainer>
)};

export default Header;
