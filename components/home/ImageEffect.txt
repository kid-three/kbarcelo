"use client";
import React from "react";
// import Sketch from "react-p5";
// import p5Types from "p5";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

let x = 50;
const y = 50;

const density =
  "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,`'. ";

const sketch: Sketch = (p5) => {
  // p5.preload = () => {};

  p5.setup = () => p5.createCanvas(600, 400);

  p5.draw = () => {
    p5.background(0);
    // p5.normalMaterial();
    // p5.push();
    // p5.rotateZ(p5.frameCount * 0.01);
    // p5.rotateX(p5.frameCount * 0.01);
    // p5.rotateY(p5.frameCount * 0.01);
    // p5.plane(100);
    // p5.pop();
    // p5.image(p5.loadImage("/me.png"), 0, 0, 100, 100);
  };
};

const ImageEffect = () => {
  return <NextReactP5Wrapper sketch={sketch} />;
  // let img: p5Types.Image | null = null;

  // const preload = (p5: p5Types) => {
  //   img = p5.loadImage("/me.png");
  // };

  // const setup = (p5: p5Types, canvasParentRef: Element) => {
  //   p5.createCanvas(500, 500).parent(canvasParentRef);
  // };

  // const draw = (p5: p5Types) => {
  //   p5.background(0);
  //   if (img) {
  //     p5.image(img, 0, 0, p5.width, p5.height);
  //   }
  // };

  // return <Sketch setup={setup} draw={draw} preload={preload} />;
};

export default ImageEffect;
