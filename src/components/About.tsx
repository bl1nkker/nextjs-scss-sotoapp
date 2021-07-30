import React from "react";
import { AboutCarousel } from "./AboutCarousel";

interface Props {}

export const About = (props: Props) => {
  return (
    <div className="content">
      <AboutCarousel />
    </div>
  );
};
