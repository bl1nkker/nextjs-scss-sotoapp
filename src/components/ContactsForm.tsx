import React from "react";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import SendIcon from "@material-ui/icons/Send";
import { useTranslation } from "react-i18next";

interface Props {}

export const ContactsForm = (props: Props) => {
  const { t, i18n } = useTranslation();
  return (
    <form className="contacts-form">
      <div className="contacts-form-hover__icon">
        <TouchAppIcon style={{ fontSize: "20rem" }} />
      </div>
      <div className="contacts-form-form__container">
        <section className={`form__field lang__${i18n.language}`}>
          <input placeholder={t("contacts_page.placeholder_name")} />
        </section>
        <section className={`form__field lang__${i18n.language}`}>
          <input placeholder={t("contacts_page.placeholder_email")} />
        </section>
        <section className={`form__field lang__${i18n.language}`}>
          <input placeholder={t("contacts_page.placeholder_number")} />
        </section>
        <section className={`form__field lang__${i18n.language}`}>
          <button>{t("contacts_page.send_button")}</button>
        </section>
      </div>
    </form>
  );
};
