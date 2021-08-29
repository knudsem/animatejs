import './App.css'
import React from 'react'
import Envelop1 from './svgComponents/envelop_1'
import Envelop2 from './svgComponents/envelop_2'
import anime from "animejs"
import Greeting from'./components/greeting'

class App extends React.PureComponent  {

  constructor(props){
		super(props)
    this.state={
      windowWidth:window.innerWidth,
			breakpoint:925
    }
    this.ref = React.createRef();
  }

  componentDidMount(){
    this.Animate1();
    this.Animate2();
    this.Animate3();
    this.Animate4();
  }

  Animate1() {
    // ***** MAKE THE ANIMATION FOR LETTER FROM LEFT TO RIGHT WITH ROTATION
    if(this.state.windowWidth > this.state.breakpoint) {
      this.ref.current = anime({
        targets: ".envelop1",
        keyframes: [
          {translateX:[-2000, 0], rotate: [-25, 0], duration: 2000},
          {translateY: '25%', delay: 1000, duration: 1000}
        ],
        easing: 'easeInOutSine',
        loop: false
    }, []);
    // ***** SAME ANIMATION BUT FOR MOBILE, ONLY ROTATION IS DIFFERENT
    }else {
      this.ref.current = anime({
        targets: ".envelop1",
        keyframes: [
          {translateX:[-2000, 0], rotate: [-95, 0], duration: 2000},
          {translateY: '25%', delay: 1000, duration: 1000}
        ],
        easing: 'easeInOutSine',
        loop: false
    }, []);
    }
}
 // ***** MAKE THE ANIMATION FOR OPENING THE LETTER
Animate2() {
  this.ref.current = anime({
    targets: ".envelop2",
    keyframes: [
      {opacity: [0, 1], duration: 1, delay: 3100},
      {translateY:['-79.9%', '-84%'], scaleY: [0.3, 1],  duration: 850}
    ],
    easing: 'easeInOutSine',
    loop: false
}, []);
}

// ***** MAKE THE ANIMATION FOR SHRINKING DOWN THE LETTER
Animate3() {
  this.ref.current = anime({
    targets: ".envelop1-container",
    scale: [1, 0],
    duration: 1000,
    delay: 4200,
    easing: 'easeInOutSine',
    loop: false
});
}

// ***** MAKE THE ANIMATION FOR FADE IN THE BACKGROUND IMAGE
Animate4() {
  this.ref.current = anime({
    targets: ".finalImage",
    opacity: [0, 1],
    duration: 1200,
    delay: 4900,
    easing: 'easeInOutSine',
    loop: false
});
}

  render(){
    return (
      <div className="App">
        <div className="envelop1-container">
          <div className="wrapper">
          <Envelop1 ref={this.ref} />
          <Envelop2 ref={this.ref} />
          </div>
        </div>
        <div className='finalImage' ref={this.ref}>
        <Greeting />
        </div>
      </div>
    );
  }
}

export default App;
