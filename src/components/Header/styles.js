import styled from 'styled-components';
import {
  FaEnvelope, FaMapMarkerAlt, FaBaby, FaBirthdayCake, FaPhone,
} from 'react-icons/fa';

export const HeaderContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;

  align-items: center;
  width: 65%;
  flex-wrap: wrap;
  @media (max-width: 1322px) {
    flex-direction: column;
    flex-wrap: wrap;
    height: 570px;
    width: 95%;
  }
  @media (max-width: 740px) {
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    width: 95%;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 550px;
  width: 300px;
  min-width: 300px;
  margin: 15px 15px;
  border-bottom-left-radius: 56px;
  border-bottom-right-radius: 56px;
  -webkit-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  -moz-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);

  background: linear-gradient(#b4c3ff, #00c1a9, #02b3d8, #0abab5);
  background-size: 400% 400%;
  /* animation: Gradient, showProfile; */
  animation: Gradient 10s ease infinite normal, showProfile 2s ease 1 normal;
  -webkit-animation: Gradient 7s ease infinite normal, showProfile 2s ease 1 normal;
  /* animation: showProfile 2s ease 1 normal; */
  /* animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: Gradient */
  /* animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: showProfile; */

  @keyframes Gradient {
    0% {
      background-position: 50% 0;
    }
    50% {
      background-position: 50% 100%;
    }
    100% {
      background-position: 50% 0;
    }
  }

  @keyframes showProfile {
    from {
      height: 0;
    }
    to {
      height: 550px;
    }
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Email = styled.span`
  font-size: 16px;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  color: #fff;
`;
export const EmailIcon = styled(FaEnvelope)`
  color: #fff;
  font-size: 20px;
  margin: 0 15px;
`;

export const LocationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const LocationIcon = styled(FaMapMarkerAlt)`
  color: #fff;
  font-size: 20px;
  margin: 0 15px;
`;

export const Location = styled.span`
  font-size: 16px;
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;
export const NationalityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const NationalityIcon = styled(FaBaby)`
  color: #fff;
  font-size: 20px;
  margin: 0 15px;
`;
export const AgeIcon = styled(FaBirthdayCake)`
  color: #fff;
  font-size: 20px;
  margin: 0 15px;
`;
export const PhoneIcon = styled(FaPhone)`
  color: #fff;
  font-size: 20px;
  margin: 0 15px;
`;

export const Nationality = styled.span`
  font-size: 22px;
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;
export const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 15px;
  -webkit-box-shadow: 0px 2px 9px -2px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 2px 9px -2px rgba(92, 92, 92, 1);
  box-shadow: 0px 2px 9px -2px rgba(255, 255, 255, 1);
`;
export const ProfileName = styled.h1`
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  text-align: center;
  font-size: 34px;
`;
export const ProfileOcupation = styled.h2`
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  text-align: center;
  text-size-adjust: auto;
  margin-bottom: 30px;
`;
