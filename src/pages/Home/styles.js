import styled from 'styled-components';
import {
  FaChartBar, FaUser, FaUserGraduate, FaCode, FaHome, FaReact,
} from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #02b3d8;
  /* background: transparent; */
  flex: 1;
  height: 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;

  -webkit-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  -moz-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
`;
export const HeaderMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuItem = styled.li`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
    a {
      font-size: 24px;
    }
    svg {
      font-size: 35px;
    }
  }
  @media (max-width: 740px) {
    span.menuName {
      display: none;
    }
  }
`;
export const MenuLink = styled.a`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
`;
export const GoTo = styled.span`
  font-size: 20px;
  color: #fff;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;
export const SkillsIcon = styled(FaChartBar)`
  font-size: 30px;
  color: #fff;
  margin: 0 10px;
`;
export const AboutIcon = styled(FaUser)`
  font-size: 25px;
  color: #fff;
  margin: 0 10px;
`;
export const CoursesIcon = styled(FaUserGraduate)`
  font-size: 25px;
  color: #fff;
  margin: 0 10px;
`;
export const ProjectsIcon = styled(FaCode)`
  font-size: 30px;
  color: #fff;
  margin: 0 10px;
`;
export const HomeIcon = styled(FaHome)`
  font-size: 30px;
  color: #fff;
  margin: 0 10px;
`;

export const SkillsHeader = styled.h2`
  margin: 15px;
  color: #707070;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #02b3d8;
  /* background: transparent; */
  flex: 1;
  height: 30px;
  position: fixed;
  bottom: 0;
  right: 0;
  width: 200px;

  -webkit-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  -moz-box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
  box-shadow: 0px 2px 4px -2px rgba(92, 92, 92, 1);
`;

export const LabelIcon = styled(FaReact)`
  color: #fff;
  font-size: 25px;
  margin: 10px;
`;
export const LabelText = styled.span`
  color: #fff;
  font-size: 18px;
  font-family: 'Calibri', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
    Verdana, sans-serif;
`;
