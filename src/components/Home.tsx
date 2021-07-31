import React from "react";
import { listOfPosts } from "../data/posts";
import { HomeCarousel } from "./HomeCarousel";

interface Props {}

export const Home = (props: Props) => {
  return (
    <div className="content">
      <HomeCarousel listOfPosts={listOfPosts} />
    </div>
  );
};
