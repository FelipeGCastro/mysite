import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Container, ImageContainer, Image, CloseButton,
} from './styles';

export default class Modal extends Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    image: PropTypes.string.isRequired,
  };

  componentDidMount = () => {};

  render() {
    const { visible, onRequestClose, image } = this.props;
    return (
      <Container visible={visible}>
        <ImageContainer>
          <CloseButton onClick={() => onRequestClose()}>X</CloseButton>
          <Image src={image} alt="ImageModal" />
        </ImageContainer>
      </Container>
    );
  }
}
