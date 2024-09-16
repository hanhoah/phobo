import React from "react";
import { Icon } from "@iconify/react";

const Address = () => {
  return (
    <div className="flex flex-row justify-between w-66 ">
      <div>
        <Icon
          className=" text-primary"
          icon="mdi-light:home"
          width="40"
          height="40"
        />
      </div>
      <div>
        WJH Werkzeugtechnik GmbH <br />
        Am Meerkamp 19a <br />
        40667 Meerbusch <br />
      </div>
    </div>
  );
};

export default Address;
