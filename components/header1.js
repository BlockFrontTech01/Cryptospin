import { useState, useCallback } from "react";
import CryptospinMenu2 from "./cryptospin-menu2";
import PortalPopup from "./portal-popup";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Header1 = () => {
  const [isCryptospinMenu2PopupOpen, setCryptospinMenu2PopupOpen] =
    useState(false);

    const { open } = useWeb3Modal()

  const openCryptospinMenu2Popup = useCallback(() => {
    setCryptospinMenu2PopupOpen(true);
  }, []);

  const closeCryptospinMenu2Popup = useCallback(() => {
    setCryptospinMenu2PopupOpen(false);
  }, []);

  return (
    <>
      <div className="my-0 mx-[!important] fixed top-[0px] left-[0px] bg-darkorchid h-20 flex flex-row items-center justify-start gap-[50px] z-[0] text-left text-6xl text-white font-hanuman lg:gap-[0px] md:gap-[13px]">
        <div className="relative w-[293px] h-[61px]">
          <img
            className="absolute top-[10.5px] left-[5px] rounded-31xl w-[50px] h-[50px] overflow-hidden object-cover"
            alt=""
            src="/frame-264@2x.png"
          />
          <div className="absolute top-[19.5px] left-[67px] font-black inline-block w-[268px] h-[41px]">
            CryptoSpin Palace
          </div>
        </div>
        <div className="relative w-[689px] h-[50px]">
          <div className="absolute top-[10px] left-[159px] w-[745px] h-10 md:hidden">
            <div
              className="absolute top-[4px] left-[0px] rounded-3xs bg-black shadow-[0px_4px_30px_#000] w-[200px] h-9 cursor-pointer"
              onClick={() => open()}
            >
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-6xl font-black font-hanuman text-white text-center inline-block w-[200px] h-9">
                Login
              </button>
            </div>
          </div>
          <img
            className="absolute top-[10px] left-[75px] rounded-3xs w-10 h-10 overflow-hidden object-cover hidden cursor-pointer md:flex"
            alt=""
            src="/frame-265@2x.png"
            onClick={openCryptospinMenu2Popup}
          />
        </div>
      </div>
      {isCryptospinMenu2PopupOpen && (
        <PortalPopup
          placement="Top right"
          onOutsideClick={closeCryptospinMenu2Popup}
        >
          <CryptospinMenu2 onClose={closeCryptospinMenu2Popup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header1;
