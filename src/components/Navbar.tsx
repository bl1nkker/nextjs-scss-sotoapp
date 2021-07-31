import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LanguageSelectionModal } from "./LanguageSelectionModal";

interface Props {}

export const Navbar: React.FC<Props> = ({}) => {
  const { t, i18n } = useTranslation();
  const [openLangModal, setOpenLangModal] = useState<boolean>(false);
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpenLangModal(false);
  };

  const handleOpenLangModal = () => {
    setOpenLangModal(!openLangModal);
  };
  return (
    <nav className={`navbar ${i18n.language}`}>
      <div className="navbar-app__name">
        <p>{t("app_name")}</p>
      </div>
      <ul className="navbar-app__links">
        <li>
          <Link to="/">{t("link_names.home")}</Link>
        </li>
        <li>
          <Link to="/about">{t("link_names.about")}</Link>
        </li>
        <li>
          <Link to="/contacts">{t("link_names.contacts")}</Link>
        </li>
      </ul>
      <div className="navbar-app__lang">
        <div className="language__button">
          <button onClick={handleOpenLangModal}>
            <img
              src={
                i18n.language === "ru"
                  ? "https://image.flaticon.com/icons/png/512/197/197408.png"
                  : i18n.language === "ko"
                  ? "https://image.flaticon.com/icons/png/512/197/197582.png"
                  : i18n.language === "jp"
                  ? "https://image.flaticon.com/icons/png/512/197/197604.png"
                  : // en
                    "https://image.flaticon.com/icons/png/512/197/197374.png"
              }
              alt="lang-icon"
            />
          </button>
        </div>
        {openLangModal && (
          <LanguageSelectionModal handleChangeLanguage={handleChangeLanguage} />
        )}
      </div>
    </nav>
  );
};
