import React from "react";
import { PostHomeType } from "../types";
import { HomeCarousel } from "./HomeCarousel";

interface Props {}

const listOfPosts: PostHomeType[] = [
  {
    image:
      "https://i.pinimg.com/originals/4e/7e/db/4e7edb84ed3c8c589ce635beccccb07c.jpg",
    title: "First title",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    id: 1,
  },
  {
    image:
      "https://oir.mobi/uploads/posts/2021-03/1616358871_54-p-milie-anime-64.png",
    description: "Some picture",
    title: "Some picture",
    id: 2,
  },
  {
    image:
      "https://i.pinimg.com/originals/b2/90/89/b290899f20be2d555e193ee134fd74ca.jpg",
    description: "Some picture",
    title: "Some picture",
    id: 3,
  },
  {
    image:
      "https://i.pinimg.com/originals/62/3a/a8/623aa8f9933ee9a286871bf6e0782538.jpg",
    description: "Some picture",
    title: "Some picture",
    id: 4,
  },
  {
    image:
      "https://images.wallpaperscraft.ru/image/devushka_zontik_dozhd_151317_225x300.jpg",
    description: "Some picture",
    title: "Some picture",
    id: 5,
  },
];

export const Home = (props: Props) => {
  return (
    <div className="content">
      <HomeCarousel listOfPosts={listOfPosts} />
    </div>
  );
};
