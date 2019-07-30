import styled from 'styled-components';

export const Container = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  display: ${props => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  background: rgba(10, 10, 10, 0.9);
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  height: 90%;
  z-index: 5;
`;
export const CloseButton = styled.a`
  width: 200px;
  height: 40px;
  border-radius: 4px;
  background: #ff6961;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 22px;
  margin-bottom: 5px;
  font-family: 'Calibri', Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    cursor: pointer;
  }
`;
export const Image = styled.img`
  margin: 0 auto;
  max-height: 95%;
  max-width: 95%;
`;
