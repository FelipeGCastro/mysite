import styled from 'styled-components';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3,
} from 'react-icons/fa';

export const SkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65%;
  min-width: 480px;
  margin-bottom: 15px;
  flex-wrap: wrap;
  @media (max-width: 1464px) {
    width: 90%;
  }
`;
export const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background: linear-gradient(#02b3d8, #00c1a9); */
  width: 32%;
  padding: 15px;
  border-radius: 20px;
  margin: 5px;
  height: 200px;
  min-width: 300px;
  @media (max-width: 721px) {
    min-width: 80%;
  }
  @media (max-width: 1067px) {
    &:last-of-type {
      background: linear-gradient(#0abab5, #b4c3ff, #00c1a9, #02b3d8);
      background-size: 400% 400%;
      animation-duration: 10s;
      animation-timing-function: ease;
      animation-delay: 0s;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-fill-mode: none;
      animation-play-state: running;
      animation-name: Gradient;
    }
  }

  -webkit-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  -moz-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);

  background: linear-gradient(#02b3d8, #0abab5, #b4c3ff, #00c1a9);
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
export const SkillBoxDown = styled.div`
  background: linear-gradient(#0abab5, #b4c3ff, #00c1a9, #02b3d8);
  background-size: 400% 400%;
  animation-duration: 10s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: Gradient;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background: linear-gradient(#b4c3ff, #02b3d8); */
  width: 32%;
  padding: 15px;
  border-radius: 20px;
  margin: 5px;
  height: 200px;
  min-width: 300px;
  @media (max-width: 721px) {
    min-width: 80%;
  }

  -webkit-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  -moz-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
`;
export const SkillName = styled.h2`
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;

export const ReactIcon = styled(FaReact)`
  color: #fff;
  font-size: 70px;
`;

export const NodeIcon = styled(FaNodeJs)`
  color: #fff;
  font-size: 70px;
`;
export const HTMLIcon = styled(FaHtml5)`
  color: #fff;
  font-size: 70px;
`;
export const CSSIcon = styled(FaCss3)`
  color: #fff;
  font-size: 70px;
`;
export const ProgressContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  border-radius: 8px;
  height: 15px;
  background: #f9f9f9;
  margin: 5px;
  -webkit-box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 1);
`;
export const ProgressBarReact = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  align-items: center;
  background: #02b3d8;
  height: 15px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const ProgressBarNode = styled.div`
  display: flex;
  width: 55%;
  justify-content: center;
  align-items: center;
  background: #02b3d8;
  height: 15px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const ProgressBarNative = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
  align-items: center;
  background: #02b3d8;
  height: 15px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const ProgressBarHTML = styled.div`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
  background: #02b3d8;
  height: 15px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const ProgressBarCSS = styled.div`
  display: flex;
  width: 68%;
  justify-content: center;
  align-items: center;
  background: #02b3d8;
  height: 15px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
export const ProgressBarJS = styled.div`
  display: flex;
  width: 65%;
  justify-content: center;
  align-items: center;
  background: #02b3d8;
  height: 15px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;
