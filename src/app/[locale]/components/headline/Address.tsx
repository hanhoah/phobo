import React from "react";
import { Icon } from "@iconify/react";

const Address = () => {
  return (
    <div className="flex flex-row justify-between w-66">
      <div>
        <Icon
          className=" text-primary"
          icon="mdi-light:home"
          width="40"
          height="40"
        />
      </div>
      <div>
        Phobo.de - Web Design & Development <br />
        Han Hoa Huynh
        <br />
        Elisabeth-Selbert-Str. 17 <br />
        45473 Mülheim an der Ruhr <br />
      </div>
    </div>
  );
};

export default Address;
