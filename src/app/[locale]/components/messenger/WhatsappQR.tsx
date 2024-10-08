import { Icon } from "@iconify/react";
import Image from "next/image";

function Whatsapp() {
  return (
    <div className="border-2 border-green-600 text-white  w-32 mx-1 md:m-5 text-center text-xl shadow-lg ">
      <a
        href="https://wa.me/491637516883"
        target="_blank"
        rel="noreferrer"
        className="m-auto"
      >
        <Image
          src="/images/qrcodes/whatsapp.png"
          alt="whatsapp"
          width="120"
          height="100"
          className="m-auto"
        />
        <div className="m-auto bg-green-600">
          <Icon
            icon="akar-icons:whatsapp-fill"
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

export default Whatsapp;
