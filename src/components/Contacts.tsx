import React from "react";
import { ContactsForm } from "./ContactsForm";

interface Props {}

export const Contacts = (props: Props) => {
  return (
    <div className="content">
      <section className="contacts-background">
        <ContactsForm />
      </section>
    </div>
  );
};
