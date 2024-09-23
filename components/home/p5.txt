"use client";
import React from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";
import p5 from "p5";

const density = "$@B%&WM*ocvunxrjft/]?-_+~<>i!lI;:,`'.   ";

let img: p5.Image | null = null;
const sketch: Sketch = (p5) => {
  p5.preload = () => {
    img = p5.loadImage("/me50.png");
  };

  p5.setup = () => {
    p5.createCanvas(600, 600);
  };

  p5.draw = () => {
    // p5.background(0);
    // if (img) {
    //   p5.image(img, 0, 0, p5.width, p5.height);
    // }

    let w = p5.width / img!.width;
    let h = p5.height / img!.height;
    img?.loadPixels();
    for (let i = 0; i < img!.width; i++) {
      for (let j = 0; j < img!.height; j++) {
        const index = (i + j * img!.width) * 4;
        const r = img?.pixels[index + 0];
        const g = img?.pixels[index + 1];
        const b = img?.pixels[index + 2];
        const avg = (r! + g! + b!) / 3;
        p5.noStroke();
        p5.fill(r!, g!, b!);
        // p5.square(i * w, j * h, w);

        const len = density.length;
        const charIndex = p5.floor(p5.map(avg, 0, 255, 0, len));
        p5.textAlign(p5.CENTER, p5.CENTER);
        // p5.text(
        //   density[Math.floor((avg / 255) * density.length)],
        //   i * w,
        //   j * h
        // );
        // p5.text(density[charIndex], i * w, j * h);
        // p5.text("G", i * w, j * h);
        p5.textSize(w);
        p5.text()
      }
    }
  };
};

export default function Example() {
  return <NextReactP5Wrapper sketch={sketch} />;
}
