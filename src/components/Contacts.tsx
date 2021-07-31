import React from "react";
import { ContactsForm } from "./ContactsForm";
import contacts_bg from "./../data/imports/anime-images/contacts-bg.webp";

interface Props {}

export const Contacts = (props: Props) => {
  return (
    <div className="content">
      <section
        style={{ backgroundImage: `url(${contacts_bg})` }}
        className="contacts-background"
      >
        <ContactsForm />
      </section>
    </div>
  );
};
