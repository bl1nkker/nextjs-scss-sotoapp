import React from "react";
import { PostHomeType } from "../types";
import { HomeCarousel } from "./HomeCarousel";

interface Props {}

const listOfPosts: PostHomeType[] = [
  {
    image:
      "https://i.pinimg.com/originals/87/9c/bd/879cbd4ffd28de1f27d7383e8c0bd741.jpg",
    title: "First title",
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    id: 1,
  },
  {
    image:
      "https://oir.mobi/uploads/posts/2021-02/1612273681_3-p-oboi-na-rabochii-stol-anime-art-deviantart-3.jpg",
    description:
      "In Sass as in CSS, property declarations define how elements that match a selector are styled. But Sass adds extra features to make them easier to write and to automate. First and foremost, a declaration's value can be any SassScript expression, which will be evaluated and included in the result.",
    title: "Second title",
    id: 2,
  },
  {
    image:
      "https://img1.akspic.ru/originals/9/9/3/4/6/164399-pust_umret_nightcore-sopernik-nightcore-pust_on_umret-lirika-3840x2160.jpg",
    description:
      "Many CSS properties start with the same prefix that acts as a kind of namespace. For example, font-family, font-size, and font-weight all start with font-. Sass makes this easier and less redundant by allowing property declarations to be nested. The outer property names are added to the inner, separated by a hyphen.",
    title: "Third title",
    id: 3,
  },
  {
    image:
      "https://img1.akspic.ru/originals/1/9/3/4/6/164391-rycari-multfilm-art-temnota-elektrik-3840x2160.jpg",
    description:
      "CSS custom properties, also known as CSS variables, have an unusual declaration syntax: they allow almost any text at all in their declaration values. What’s more, those values are accessible to JavaScript, so any value might potentially be relevant to the user. This includes values that would normally be parsed as SassScript.",
    title: "Fourth picture",
    id: 4,
  },
  {
    image:
      "https://img1.akspic.ru/originals/1/9/3/5/6/165391-anime-shoto_todoroki-anime_devushka-golova-glaz-3840x2160.jpg",
    description:
      "Because of this, Sass parses custom property declarations differently than other property declarations. All tokens, including those that look like SassScript, are passed through to CSS as-is. The only exception is interpolation, which is the only way to inject dynamic values into a custom property.",
    title: "Fifth picture",
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
