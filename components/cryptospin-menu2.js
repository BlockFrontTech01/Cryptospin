import { useCallback, useEffect } from "react";
import { useWeb3Modal } from '@web3modal/wagmi/react'

const CryptospinMenu2 = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const { open } = useWeb3Modal()

  const onFrameButton1Click = useCallback(() => {
    window.open("https://blockfronttech.vercel.app");
  }, []);

  return (
    <div
      className="bg-darkorchid w-[375px] h-[265px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] opacity-[0] max-w-full max-h-full overflow-auto [&.animate]:md:animate-[1s_linear_0s_1_normal_forwards_slide-in-top] md:opacity-[0]"
      data-animate-on-scroll
    >
      <button
        className="cursor-pointer [border:none] p-0 bg-black absolute top-[92px] left-[99px] rounded-xl shadow-[0px_4px_30px_#000] w-[133px] h-[22px] overflow-hidden"
        onClick={() => open()}
      >
        <b className="absolute top-[0px] left-[46px] text-mini font-inika text-white text-center">
          Login
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-black absolute top-[162px] left-[99px] rounded-xl shadow-[0px_4px_30px_#000] w-[133px] h-[22px] overflow-hidden"
        onClick={onFrameButton1Click}
      >
        <b className="absolute top-[0px] left-[31px] text-mini font-inika text-white text-center">
          Developer
        </b>
      </button>
      <img
        className="absolute top-[19px] left-[325px] w-[30px] h-[21px] overflow-hidden object-cover cursor-pointer"
        alt=""
        src="/frame-371@2x.png"
        onClick={onClose}
      />
    </div>
  );
};

export default CryptospinMenu2;
