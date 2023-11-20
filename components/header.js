import { useState, useCallback } from "react";
import CryptospinMenu from "./cryptospin-menu";
import PortalPopup from "./portal-popup";
import { useRouter } from "next/router";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Header = () => {
  const [isCryptospinMenuPopupOpen, setCryptospinMenuPopupOpen] =
    useState(false);
  const router = useRouter();

  const onFrameButtonClick = useCallback(() => {
    window.open("{}");
  }, []);

  const { open } = useWeb3Modal()

  const onFrameButton1Click = useCallback(() => {
    router.push("/casino");
  }, [router]);

  const openCryptospinMenuPopup = useCallback(() => {
    setCryptospinMenuPopupOpen(true);
  }, []);

  const closeCryptospinMenuPopup = useCallback(() => {
    setCryptospinMenuPopupOpen(false);
  }, []);

  return (
    <>
      <div className="my-0 mx-[!important] fixed top-[0px] left-[0px] bg-darkorchid w-[1728px] h-20 flex flex-row items-center justify-start gap-[50px] z-[0] text-left text-6xl text-white font-hanuman lg:gap-[0px] md:gap-[13px]">
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
            <button
              className="cursor-pointer [border:none] p-0 bg-black absolute top-[4px] left-[286px] rounded-3xs shadow-[0px_4px_30px_#000] w-[143px] h-9"
              onClick={onFrameButtonClick}
            >
              <button
                className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[36px] text-6xl font-black font-hanuman text-white text-center inline-block w-[71px] h-9"
                onClick={() => open()}
              >
                Login
              </button>
            </button>
            <button
              className="cursor-pointer [border:none] p-0 bg-black absolute top-[4px] left-[0px] rounded-3xs shadow-[0px_4px_30px_#000] w-[200px] h-9"
              onClick={onFrameButton1Click}
            >
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-6xl font-black font-hanuman text-white text-center inline-block w-[200px] h-9">
                Casino
              </button>
            </button>
          </div>
          <img
            className="absolute top-[10px] left-[75px] rounded-3xs w-10 h-10 overflow-hidden object-cover hidden cursor-pointer md:flex"
            alt=""
            src="/frame-265@2x.png"
            onClick={openCryptospinMenuPopup}
          />
        </div>
      </div>
      {isCryptospinMenuPopupOpen && (
        <PortalPopup
          placement="Top right"
          onOutsideClick={closeCryptospinMenuPopup}
        >
          <CryptospinMenu onClose={closeCryptospinMenuPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
