import { Icon } from "@iconify/react";

function Zalo() {
  return (
    <a href="https://telegram.me/pho_bo_ngon" target="_blank" rel="noreferrer">
      <div className="bg-blue-600 text-white  w-32 rounded-full py-2 px-2 text-center text-xl shadow-lg border-2 m-auto">
        <Icon
          icon="simple-icons:zalo"
          className="text-white inline-block mr-2"
          width="36"
          height="36"
        />
      </div>
    </a>
  );
}

export default Zalo;
