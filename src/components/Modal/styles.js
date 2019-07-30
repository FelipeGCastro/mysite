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

  background: rgba(10, 10, 10, 0.6);
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 90%;
  height: 90%;
  z-index: 5;
`;
export const CloseButton = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #fff;
  text-decoration: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  margin-right: 10px;
  font-size: 22px;
  &:hover {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
`;
export const Image = styled.img`
  margin: 0 auto;
  max-height: 100%;
  max-width: 100%;
`;
