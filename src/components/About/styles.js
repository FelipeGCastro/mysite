import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFacebookSquare } from 'react-icons/fa';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
  /* background: linear-gradient(#b4c3ff, #02b3d8); */
  /* background: linear-gradient(#0abab5, #00c1a9, #02b3d8, #b4c3ff); */
  /* height: 400px; */
  margin-top: 15px;
  min-height: 400px;
  -webkit-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  -moz-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);

  background: linear-gradient(#00c1a9, #02b3d8, #0abab5, #b4c3ff);
  background-size: 400% 400%;
  animation-duration: 10s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: Gradient;
`;
export const AboutBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  min-width: 300px;
`;
export const AboutTitle = styled.h1`
  margin-bottom: 30px;
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;
export const AboutText = styled.p`
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-size: 19px;
  text-align: center;
`;
export const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  flex-wrap: wrap;
`;
export const SocialBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  border-width: 1px;
  border-color: #fff;
  border-style: solid;
  padding: 10px;
  margin-right: 5px;
  background: transparent;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    border-color: #fff;
    background: #0abab5;
    font-size: 22px;
    span {
      font-size: 22px;
    }
  }
`;
export const FaGithubIcon = styled(FaGithub)`
  color: #fff;
  font-size: 30px;
  margin-right: 5px;
  font-weight: bold;
`;
export const FaLinkedinIcon = styled(FaLinkedin)`
  color: #fff;
  font-size: 30px;
  margin-right: 5px;
  font-weight: bold;
`;
export const FaFacebookFIcon = styled(FaFacebookSquare)`
  color: #fff;
  font-size: 30px;
  margin-right: 5px;
  font-weight: bold;
`;

export const SocialName = styled.span`
  color: #fff;
  font-size: 18px;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;
