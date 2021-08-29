import React from 'react';
import greeting from'../styles/img/greetingLayout.png'

console.log(greeting); // /logo.84287d09.png

function Greeting() {
  // Import result is the URL of your image
  return <img src={greeting} alt="greets" />;
}

export default Greeting;