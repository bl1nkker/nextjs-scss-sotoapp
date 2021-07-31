import React, { useState } from "react";
import { PostHomeType } from "../types";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";

interface Props {}

const listOfImages: string[] = ["https://wallpaperaccess.com/full/3097725.jpg"];

export const AboutCarousel: React.FC<Props> = ({}) => {
  const { t, i18n } = useTranslation();
  return (
    <Carousel
      controls={false}
      indicators={false}
      fade
      pause={false}
      className="about__carousel"
    >
      {listOfImages.map((image, key) => (
        <Carousel.Item
          key={key}
          interval={3000}
          style={{ backgroundImage: `url(${image})` }}
        >
          <Carousel.Caption>
            <div className={`content lang__${i18n.language}`}>
              <h1>{t("app_name")}</h1>
              <h3>{t("about_page.created_by_pref")}: bl1nk-</h3>
              <div className="paragraphs">
                <p>
                  {t("about_page.source_code_pref")}:{" "}
                  <a
                    href="https://github.com/bl1nkker/soto-app"
                    target="_blank"
                  >
                    "Soto" source code
                  </a>
                </p>
                <p>
                  {t("about_page.other_proj_pref")}:{" "}
                  <a href="https://github.com/bl1nkker" target="_blank">
                    GitHub profile
                  </a>
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
