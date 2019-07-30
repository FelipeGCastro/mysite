import styled from 'styled-components';
import { FaExternalLinkAlt, FaRegCopy } from 'react-icons/fa';

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  /* background: linear-gradient(#b4c3ff, #02b3d8); */
  /* background: linear-gradient(#0abab5, #00c1a9, #02b3d8, #b4c3ff); */
  margin-top: 15px;
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
export const CoursesBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  padding: 10px;
  min-width: 310px;
  border-style: solid;
  border-width: 1px;
  border-color: #fff;
`;
export const CoursesTitle = styled.h1`
  margin-bottom: 30px;
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;

export const CourseContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;
export const CourseName = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const CourseDescription = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const CourseImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 20px;
`;
export const LinkButton = styled.a`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;
export const LinkIcon = styled(FaExternalLinkAlt)`
  color: #fff;
  font-size: 25px;
  margin-left: 15px;
`;
export const CopyIcon = styled(FaRegCopy)`
  color: #fff;
  font-size: 25px;
  margin-left: 15px;
  &:hover {
    cursor: pointer;
  }
`;
export const CourseTitle = styled.h2`
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-size: 20px;
  font-weight: normal;
`;
export const CoursesText = styled.p`
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
  font-size: 19px;
`;

export const CourseCertificate = styled.img`
  width: 50%;
  margin-bottom: 15px;

  @media (max-width: 1300px) {
    width: 90%;
  }
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
