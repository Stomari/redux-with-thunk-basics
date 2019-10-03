import {
  INCREMENT,
  SUM,
  SET_IMAGE,
  SHOW_IMAGE
} from './actionTypes';

// Actions are plain JavaScript objects. Actions must have a type property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

export const increment = () => {
    return {
      type: INCREMENT
    };
}

export const sum = (num) => {
  return {
    type: SUM,
    payload: num
  };
}

export const showImage = (image) => {
  return {
    type: SHOW_IMAGE, 
    payload: image
  };
}