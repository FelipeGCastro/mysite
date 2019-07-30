import React from 'react';
import Perfil from '../../assets/Eu.jpg';

import {
  InfoContainer,
  EmailContainer,
  LocationContainer,
  Email,
  EmailIcon,
  LocationIcon,
  Location,
  NationalityIcon,
  PhoneIcon,
  AgeIcon,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  ProfileOcupation,
} from './styles';

const Header = () => (
  <ProfileContainer id="home">
    <ProfileImage src={Perfil} alt="Profile" />
    <ProfileName>Luiz Felipe Castro</ProfileName>
    <ProfileOcupation>Front-End Developer</ProfileOcupation>
    <InfoContainer>
      <EmailContainer>
        <EmailIcon />
        <Email>felipe1693@gmail.com</Email>
      </EmailContainer>
      <LocationContainer>
        <PhoneIcon />
        <Location>+351 935 834 515</Location>
      </LocationContainer>
      <EmailContainer>
        <AgeIcon />
        <Email>25 years old</Email>
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
);

export default Header;
