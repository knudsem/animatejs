import React from 'react'
import { useState, useEffect } from 'react';
import anime from "animejs"

export default function Animate1() {
    const animationRef = React.useRef(null);

        React.useEffect(() => {
        animationRef.current = anime({
            targets: ".envelop1",
            translateX: [-2000, 0],
            rotate: [-25, 0],
            loop: false,
            easing: "easeInOutSine"
        });
        }, []);
}