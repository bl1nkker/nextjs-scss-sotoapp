import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TelegramIcon from "@material-ui/icons/Telegram";

interface Props {}

export const OnlineHelpers = (props: Props) => {
  return (
    <div className="helpers">
      <div className="whatsapp">
        <button>
          <WhatsAppIcon style={{ fontSize: "2.5rem" }} />
        </button>
      </div>
      <div className="telegram">
        <button>
          <TelegramIcon style={{ fontSize: "2.5rem" }} />
        </button>
      </div>
    </div>
  );
};
