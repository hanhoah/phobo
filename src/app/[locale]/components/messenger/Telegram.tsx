import { Icon } from "@iconify/react";

function Telegram() {
  return (
    <a href="https://telegram.me/pho_bo_ngon" target="_blank" rel="noreferrer">
      <div className="bg-sky-400 text-white w-36 rounded-full py-3 px-3 text-center text-xl shadow-lg border-2 m-auto">
        <Icon
          icon="akar-icons:telegram-fill"
          className="text-white inline-block mr-2"
          width="20"
          height="20"
        />
        Telegram
      </div>
    </a>
  );
}

export default Telegram;
