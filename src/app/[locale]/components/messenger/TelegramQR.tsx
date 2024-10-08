import { Icon } from "@iconify/react";
import Image from "next/image";

function Telegram() {
  return (
    <div className="border-2 border-sky-400 text-white  w-32 mx-1 md:m-5 text-center text-xl shadow-lg ">
      <a
        href="https://telegram.me/pho_bo_ngon"
        target="_blank"
        rel="noreferrer"
        className="m-auto"
      >
        <Image
          src="/images/qrcodes/telegram.png"
          alt="whatsapp"
          width="120"
          height="100"
          className="m-auto"
        />
        <div className="m-auto bg-sky-400">
          <Icon
            icon="akar-icons:telegram-fill"
            className="text-white inline-block mr-2"
            width="20"
            height="20"
          />
          Scan me
        </div>
      </a>
    </div>
  );
}

export default Telegram;
