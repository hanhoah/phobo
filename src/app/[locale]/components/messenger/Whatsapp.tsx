import { Icon } from "@iconify/react";

function Whatsapp() {
  return (
    <a href="https://wa.me/491637516883" target="_blank" rel="noreferrer">
      <div className="bg-green-600 text-white  w-36 rounded-full py-3 px-2 text-center text-xl shadow-lg border-2 m-auto">
        <Icon
          icon="akar-icons:whatsapp-fill"
          className="text-white inline-block mr-2"
          width="20"
          height="20"
        />
        Whatsapp
      </div>
    </a>
  );
}

export default Whatsapp;
