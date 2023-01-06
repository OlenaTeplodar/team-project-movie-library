
import {Spinner} from 'spin.js';

const opts = {
  lines: 13, 
  length: 38, 
  width: 17, 
  radius: 45, 
  scale: 1, 
  corners: 1, 
  speed: 1, 
  rotate: 0, 
  animation: 'spinner-line-fade-more', 
  direction: 1, 
  color: '#FF001B', 
  fadeColor: 'transparent', 
  top: '100px', 
  left: '50%', 
  shadow: '0 0 1px transparent',
  zIndex: 2000000000, 
  className: 'spinner', 
  position: 'absolute', 
};

export const spinner = new Spinner(opts);