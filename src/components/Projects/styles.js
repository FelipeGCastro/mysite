import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const ProjectBox = styled.div`
  display: flex;
  width: 30%;
  min-width: 340px;
  margin-right: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 5px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
`;
export const ProjectHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom-style: solid;
  border-bottom-color: rgba(10, 10, 10, 0.1);
  border-bottom-width: 1px;
  padding: 20px;
`;
export const ProjectTitle = styled.h2`
  color: #707070;
  font-family: 'Calibri', Tahoma, Geneva, Verdana, sans-serif;
`;
export const ProjectImageBox = styled.div`
  width: 300px;
  height: 300px;
  margin: 20px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
export const ProjectImage = styled.img`
  width: 300px;

  &:hover {
  }
`;
export const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-top-style: solid;
  border-top-color: rgba(10, 10, 10, 0.1);
  border-top-width: 1px;
  padding: 20px;
`;
export const TechName = styled.span`
  padding: 10px;
  background: rgba(10, 10, 10, 0.1);
  border-radius: 4px;
  margin-right: 5px;
  color: #707070;
  font-family: 'Calibri', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  margin-bottom: 5px;

  &:hover {
    cursor: default;
    background: rgba(10, 10, 10, 0.6);
    color: #fff;
  }
`;
export const MinTechName = styled.span`
  padding: 5px;
  background: rgba(10, 10, 10, 0.1);
  border-radius: 4px;
  margin-right: 5px;
  color: #707070;
  font-family: 'Calibri', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  margin-bottom: 5px;
  &:hover {
    cursor: default;
    background: rgba(10, 10, 10, 0.6);
    color: #fff;
  }
`;
export const ProjectFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  border-top-style: solid;
  border-top-color: rgba(10, 10, 10, 0.1);
  border-top-width: 1px;
  padding: 10px;
`;
export const ProjectLinks = styled.a`
  color: #707070;
  text-decoration: none;
  font-family: 'Calibri', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;
export const GitIcon = styled(FaGithub)`
  color: #707070;
  font-size: 40px;
  &:hover {
    color: #02b3d8;
  }
`;
