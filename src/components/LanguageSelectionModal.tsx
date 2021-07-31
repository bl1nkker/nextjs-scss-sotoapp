import React from "react";

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
        <img
          src="https://image.flaticon.com/icons/png/512/197/197374.png"
          alt="en-lang"
        />
      </button>
      <button
        className="language__button"
        onClick={() => handleChangeLanguage("ru")}
      >
        <img
          src="https://image.flaticon.com/icons/png/512/197/197408.png"
          alt="ru-lang"
        />
      </button>
      <button
        className="language__button"
        onClick={() => handleChangeLanguage("ko")}
      >
        <img
          src="https://image.flaticon.com/icons/png/512/197/197582.png"
          alt="ko-lang"
        />
      </button>
      <button
        className="language__button"
        onClick={() => handleChangeLanguage("jp")}
      >
        <img
          src="https://image.flaticon.com/icons/png/512/197/197604.png"
          alt="jp-lang"
        />
      </button>
    </div>
  );
};
