import React from "react";
import { PostHomeType } from "../types";
import { HomeCarousel } from "./HomeCarousel";

interface Props {}

const listOfPosts: PostHomeType[] = [
  {
    image:
      "https://i.pinimg.com/originals/87/9c/bd/879cbd4ffd28de1f27d7383e8c0bd741.jpg",
    title: "Anime girl story",
    description:
      "Anime teenage girl shows her first drawing: - Here, this is my first job. I got a horse.- So this is wonderful! You are 16 years old, and you are already painting as a professional artist!- I don't know how to draw a horse ...- Come on, draw a horse. - OK.She draws a horse and says: - I don’t know, I don’t know ...This is something between a dog and an elephant. - ???",
    id: 1,
  },
  {
    image:
      "https://oir.mobi/uploads/posts/2021-02/1612273681_3-p-oboi-na-rabochii-stol-anime-art-deviantart-3.jpg",
    description:
      "A beautiful killer. I knew that she was supposed to stab someone, but I didn't think it was so beautiful. She didn't even scream. It all happened so quickly. And I knew, I felt that this was not the end. That she's out there somewhere, hiding and laughing at me. She is my daughter. I still remember her last look. Nightmare. There was everything in this look: pain, fear, misunderstanding.",
    title: "Any last words?",
    id: 2,
  },
  {
    image:
      "https://img1.akspic.ru/originals/9/9/3/4/6/164399-pust_umret_nightcore-sopernik-nightcore-pust_on_umret-lirika-3840x2160.jpg",
    description:
      "The killer with red hair went hunting. I know what you are doing to each other. I saw it in your eyes. You can't breathe when you see her next to ... She's everywhere! You will not be able to play it! She knows all your thoughts ... You want her to leave, but you are afraid to admit it even to yourself! You love her more than life, but you are also afraid ....",
    title: "Redheaded killer",
    id: 3,
  },
  {
    image:
      "https://img1.akspic.ru/originals/1/9/3/4/6/164391-rycari-multfilm-art-temnota-elektrik-3840x2160.jpg",
    description:
      "The defender always carries a pair of handcuffs with her in case a man needs to be arrested. When she asks if I have a girlfriend, I just laugh. She replies that I am not in a position to joke. The next time I was about to joke, for some reason I couldn't. Apparently it was a very funny joke. I never joked about it again.",
    title: "Chronicles of the Japanese defender",
    id: 4,
  },
  {
    image:
      "https://img1.akspic.ru/originals/1/9/3/5/6/165391-anime-shoto_todoroki-anime_devushka-golova-glaz-3840x2160.jpg",
    description:
      "Girl in a black dress with a flower in her hand. We met her eyes and smiled at each other. I didn't know what else to say ... This was the first time I saw her cry. She said, 'Come with me. I will take you to one place where you will be safe.' And I went. More than anything in the world I was afraid of this very moment. When we arrived, she led me to a stone and gave me a sword.",
    title: "Girl in black",
    id: 5,
  },
  {
    image: "https://images5.alphacoders.com/344/thumb-1920-344581.jpg",
    description:
      "When I look at them, I always think that there are living beings in front of me who are simply playing with me the same way a cat plays with a mouse or a dog plays with a ball. I know that they exist, but this does not change my attitude towards them.",
    title: "Lovely soul eaters",
    id: 6,
  },
  {
    image:
      "https://images.hdqwalls.com/wallpapers/katana-anime-girl-neon-4k-9s.jpg",
    description:
      "As soon as I saw this phrase, I immediately remembered that I dreamed: 'A knight ... In shining armor ... She will fight anyone for me and bring me what I want ...' Ok Google ... 'Bodyguard with katana'. Sounds like the name of some horror movie ... She looked like an elf. Short, about 160 centimeters, thin.",
    title: "Bodyguard with katana",
    id: 7,
  },
];

export const Home = (props: Props) => {
  return (
    <div className="content">
      <HomeCarousel listOfPosts={listOfPosts} />
    </div>
  );
};
