import React, { useState } from "react";
import { PostHomeType } from "../types";
import Carousel from "react-bootstrap/Carousel";

interface Props {
  listOfPosts: PostHomeType[];
}

export const HomeCarousel: React.FC<Props> = ({ listOfPosts }) => {
  const [currentPost, setCurrentPost] = useState<number>(0);

  const handleOnSlide = (slideIndex: number) => {
    console.log(listOfPosts);
    setCurrentPost(slideIndex);
  };
  return (
    <Carousel
      controls={false}
      onSlide={(slideIndex) => handleOnSlide(slideIndex)}
      fade
    >
      {listOfPosts.map((post) => (
        <Carousel.Item
          key={post.id}
          interval={20000}
          style={{ backgroundImage: `url(${post.image})` }}
        >
          {/* <img alt="post" src={post.image} /> */}
          <Carousel.Caption>
            <div className="content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
