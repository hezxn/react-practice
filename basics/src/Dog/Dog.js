import React from 'react';
import './Dog.css';

const dog = (props) => {
      return( <p className="doggy"> My dog is {props.breed}.<br /> {props.children}</p> )
}

export default dog;