import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo3.png";

function Footer() {
  return (
    <div>
      <footer className="flex object-bottom justify-center items-center bg-primary font-bolder cursor-pointer text-white w-full h-full flex-col border-t text-lg">
        
          <div className="  pt-2">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </div>
       

        <div className=" flex content-between pb-3">
            <div className="pl-5 pr-5">
            <ui>About</ui>

            </div>
            <div className="pl-5 pr-5">
            <ui>Covid</ui>

            </div>
            <div className="pl-5 pr-5">
            <ui>FAQ</ui>

            </div>
          
          
        </div>
      </footer>
    </div>
  );
}

export default Footer;
