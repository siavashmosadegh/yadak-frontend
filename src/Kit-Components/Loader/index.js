import React from 'react';
// import { useSelector } from 'react-redux';
import {
  LoadingWrapper,
  LoadingIconWrapper,
} from './styles';

const Loader = (props) => {
  // const theme = useSelector((state) => state.Global.theme);

  const { 
    size, 
    color 
  } = props;

  return (
    <LoadingWrapper className="loading">
      <LoadingIconWrapper 
        size={size} 
        // color={color || theme.gray}
        color={color}
      >
        <div class="sk-circle">
          <div class="sk-circle1 sk-child"></div>
          <div class="sk-circle2 sk-child"></div>
          <div class="sk-circle3 sk-child"></div>
          <div class="sk-circle4 sk-child"></div>
          <div class="sk-circle5 sk-child"></div>
          <div class="sk-circle6 sk-child"></div>
          <div class="sk-circle7 sk-child"></div>
          <div class="sk-circle8 sk-child"></div>
          <div class="sk-circle9 sk-child"></div>
          <div class="sk-circle10 sk-child"></div>
          <div class="sk-circle11 sk-child"></div>
          <div class="sk-circle12 sk-child"></div>
        </div>
      </LoadingIconWrapper>
    </LoadingWrapper>
  );
};

Loader.defaultProps = {
  size: 25,
};

export default Loader;