import React from "react";
import ru_icon from "./../data/imports/lang-icons/ru-icon.png";
import en_icon from "./../data/imports/lang-icons/en-icon.png";
import ko_icon from "./../data/imports/lang-icons/ko-icon.png";
import jp_icon from "./../data/imports/lang-icons/jp-icon.png";

interface Props {
  handleChangeLanguage: (lang: string) => void;
}

export const LanguageSelectionModal: React.FC<Props> = ({
  handleChangeLanguage,
}) => {
  return (
    <div className="language__modal">
      <button
        className="language__button"
        onClick={() => handleChangeLanguage("en")}
      >
        <img src={en_icon} alt="en-lang" />
      </button>
      <button
        className="language__button"
        onClick={() => handleChangeLanguage("ru")}
      >
        <img src={ru_icon} alt="ru-lang" />
      </button>
      <button
        className="language__button"
        onClick={() => handleChangeLanguage("ko")}
      >
        <img src={ko_icon} alt="ko-lang" />
      </button>
      <button
        className="language__button"
        onClick={() => handleChangeLanguage("jp")}
      >
        <img src={jp_icon} alt="jp-lang" />
      </button>
    </div>
  );
};
