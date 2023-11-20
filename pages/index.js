import { useCallback, useEffect } from "react";
import Header from "../components/header";

const CryptoSpin = () => {
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

  const onFrameButtonClick = useCallback(() => {
    window.open("/casino");
  }, []);

  return (
    <div className="relative bg-darkorchid w-full h-[2715px] overflow-hidden flex flex-row items-start justify-start p-2.5 box-border gap-[10px] text-center text-lg text-white font-hanuman md:h-[2800px]">
      <div
        className="my-0 mx-[!important] absolute top-[80px] left-[5px] hidden flex-row items-center justify-start gap-[221px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] z-[1] text-left text-gold md:flex md:gap-[0px] md:pl-0 md:pt-[100px] md:pr-0 md:box-border"
        data-animate-on-scroll
      >
        <div className="relative w-3 h-[50px] overflow-hidden shrink-0" />
        <div className="relative rounded-xl [background:linear-gradient(90deg,_#47ff07,_#eb07ff_37.48%,_#100e0e)] w-[395px] h-[205px] overflow-hidden shrink-0">
          <div className="absolute top-[25px] left-[7px] font-black">
            <p className="m-0">200% BONUS</p>
            <p className="m-0">+50 FREE SPINS</p>
          </div>
          <div className="absolute top-[107px] left-[19px] text-sm text-aqua text-center inline-block w-[141px]">
            Login with wallet
          </div>
          <i className="absolute top-[31px] left-[160px] font-bold font-ibarra-real-nova text-white">
            Upto 1 BTC
          </i>
          <img
            className="absolute top-[42px] left-[270px] w-[125px] h-[121px] overflow-hidden object-cover"
            alt=""
            src="/frame-426@2x.png"
          />
          <img
            className="absolute top-[163px] left-[145px] w-[30px] h-10 object-cover"
            alt=""
            src="/image-14@2x.png"
          />
          <img
            className="absolute top-[168px] left-[196px] w-[30px] h-[30px] object-cover"
            alt=""
            src="/image-15@2x.png"
          />
          <img
            className="absolute top-[168px] left-[246px] w-[30px] h-[30px] object-cover"
            alt=""
            src="/image-16@2x.png"
          />
          <img
            className="absolute top-[163px] left-[90px] w-10 h-10 object-cover"
            alt=""
            src="/image-13@2x.png"
          />
          <img
            className="absolute top-[168px] left-[42px] w-[33px] h-[33px] object-cover"
            alt=""
            src="/image-12@2x.png"
          />
        </div>
      </div>
      <div
        className="my-0 mx-[!important] absolute top-[122px] left-[0px] w-[1293px] flex flex-row items-center justify-end gap-[300px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] z-[2] text-left text-16xl text-gold lg:gap-[0px] lg:pr-[200px] lg:box-border md:hidden"
        data-animate-on-scroll
      >
        <div className="relative w-[18px] h-[148px] overflow-hidden shrink-0" />
        <div className="relative rounded-xl [background:linear-gradient(90deg,_#47ff07,_#eb07ff_37.48%,_#100e0e)] w-[1042px] h-[269px] overflow-hidden shrink-0">
          <div className="absolute top-[32px] left-[37px] font-black">
            <p className="m-0">200% BONUS</p>
            <p className="m-0">+50 FREE SPINS</p>
          </div>
          <div className="absolute top-[167px] left-[59px] text-6xl text-aqua text-center inline-block w-[236px]">
            Login with wallet
          </div>
          <i className="absolute top-[66px] left-[393px] font-bold font-ibarra-real-nova text-white">
            Upto 1 BTC
          </i>
          <img
            className="absolute top-[0px] left-[748px] w-[294px] h-[269px] overflow-hidden object-cover"
            alt=""
            src="/frame-4261@2x.png"
          />
          <div className="absolute top-[218px] left-[339px] w-[50px] h-[50px]">
            <img
              className="absolute top-[0px] left-[0px] w-[50px] h-[50px] object-cover"
              alt=""
              src="/image-131@2x.png"
            />
          </div>
          <img
            className="absolute top-[218px] left-[412px] w-10 h-10 object-cover"
            alt=""
            src="/image-141@2x.png"
          />
          <img
            className="absolute top-[218px] left-[482px] w-10 h-10 object-cover"
            alt=""
            src="/image-151@2x.png"
          />
          <img
            className="absolute top-[218px] left-[552px] w-10 h-10 object-cover"
            alt=""
            src="/image-161@2x.png"
          />
          <img
            className="absolute top-[218px] left-[276px] w-10 h-10 object-cover"
            alt=""
            src="/image-121@2x.png"
          />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1067px] left-[0px] w-[506px] hidden flex-row items-start justify-end gap-[418px] z-[3] text-mini md:flex md:gap-[0px] md:pt-[850px] md:pr-24 md:box-border">
        <div className="flex flex-row items-center justify-start">
          <div className="relative w-[100px] h-[100px] overflow-hidden shrink-0" />
        </div>
        <div
          className="relative rounded-xl bg-gray w-[394px] h-[699px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[51px] left-[0px] text-lg inline-block w-[78px]">
            Game
          </div>
          <div className="absolute top-[51px] left-[307px] text-lg inline-block w-[87px]">
            Payout
          </div>
          <div className="absolute top-[108px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[11px] left-[8px]">Million Vegads</b>
            <b className="absolute top-[11px] left-[210px]">0.000004394 BTC</b>
            <img
              className="absolute top-[8px] left-[340px] w-[25px] h-[25px] object-cover"
              alt=""
              src="/image-17@2x.png"
            />
          </div>
          <div className="absolute top-[220px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[12px] left-[10px]">European Roulette</b>
            <b className="absolute top-[12px] left-[223px]">0.0035594 BTC</b>
            <img
              className="absolute top-[10px] left-[340px] w-[25px] h-[25px] object-cover"
              alt=""
              src="/image-17@2x.png"
            />
          </div>
          <div className="absolute top-[388px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[12px] left-[9px]">Le Banditz</b>
            <b className="absolute top-[12px] left-[218px]">0.00039527 BTC</b>
            <img
              className="absolute top-[10px] left-[340px] w-[25px] h-[25px] object-cover"
              alt=""
              src="/image-17@2x.png"
            />
          </div>
          <div className="absolute top-[444px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[13px] left-[7px]">Lord of the Ocean</b>
            <b className="absolute top-[12px] left-[250px]">0.0977 BTC</b>
            <img
              className="absolute top-[10px] left-[340px] w-[25px] h-[25px] object-cover"
              alt=""
              src="/image-17@2x.png"
            />
          </div>
          <div className="absolute top-[276px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[12px] left-[8px]">Blood Suckers</b>
            <b className="absolute top-[12px] left-[242px]">30.4 USDT</b>
            <img
              className="absolute top-[10px] left-[338px] w-[25px] h-[25px] object-cover"
              alt=""
              src="/image-171@2x.png"
            />
          </div>
          <div className="absolute top-[500px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[12px] left-[10px]">Crystal Catcher</b>
            <b className="absolute top-[12px] left-[239px]">103.56 USDT</b>
            <img
              className="absolute top-[10px] left-[338px] w-[25px] h-[25px] object-cover"
              alt=""
              src="/image-171@2x.png"
            />
          </div>
          <div className="absolute top-[612px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[12px] left-[8px]">Instant Roulette</b>
            <b className="absolute top-[12px] left-[245px]">20.00 USDT</b>
            <img
              className="absolute top-[10px] left-[338px] w-[25px] h-[25px] object-cover"
              alt=""
              src="/image-171@2x.png"
            />
          </div>
          <div className="absolute top-[164px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[10px] left-[8px]">Dead or Alive 2</b>
            <b className="absolute top-[10px] left-[243px]">0.32434 ETH</b>
            <div className="absolute top-[6px] left-[334px] w-[37px] h-[30px]">
              <img
                className="absolute top-[0px] left-[0px] w-[37px] h-[30px] object-cover"
                alt=""
                src="/image-132@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[332px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[10px] left-[10px]">Candi Blitz</b>
            <b className="absolute top-[10px] left-[235px]">0.024573 ETH</b>
            <div className="absolute top-[6px] left-[334px] w-[37px] h-[30px]">
              <img
                className="absolute top-[0px] left-[0px] w-[37px] h-[30px] object-cover"
                alt=""
                src="/image-132@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[556px] left-[9px] rounded-3xs bg-black w-[371px] h-[42px] overflow-hidden">
            <b className="absolute top-[10px] left-[10px]">PLINKO</b>
            <b className="absolute top-[10px] left-[239px]">0.34663 ETH</b>
            <div className="absolute top-[6px] left-[334px] w-[37px] h-[30px]">
              <img
                className="absolute top-[0px] left-[0px] w-[37px] h-[30px] object-cover"
                alt=""
                src="/image-132@2x.png"
              />
            </div>
          </div>
          <b className="absolute top-[3px] left-[158px] text-lg text-lime">
            All Bets
          </b>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[517px] left-[0px] w-[1559px] flex flex-row items-start justify-center gap-[236px] z-[4] text-xl lg:w-[1200px] md:flex-col md:gap-[150px] md:pl-[15px] md:box-border">
        <div className="relative w-[395px] h-[464px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-xl w-[395px] h-[233px] overflow-hidden object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            alt=""
            src="/frame-431@2x.png"
            data-animate-on-scroll
          />
          <div className="absolute top-[261px] left-[27px] inline-block w-[342px]">
            <p className="m-0 font-black">Dice Casino</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Enjoy our unique selection of slots, live dealers and original
              games, all accompanied by our unbeatable VIP rewards and exclusive
              bonuses
            </p>
          </div>
        </div>
        <div className="relative w-[395px] h-[435px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-xl w-[395px] h-[233px] overflow-hidden object-cover [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
            alt=""
            src="/frame-432@2x.png"
            data-animate-on-scroll
          />
          <div className="absolute top-[261px] left-[27px] inline-block w-[342px]">
            <p className="m-0 font-black">Sportsbook</p>
            <p className="m-0 font-black">&nbsp;</p>
            <p className="m-0">
              Bet on nearly any sporting event in the world, and we've even got
              a wide range of virtual sports for when the superstars are
              sleeping
            </p>
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1039px] left-[0px] w-[1000px] flex flex-row items-start justify-center gap-[449px] z-[5] lg:w-[700px] md:w-[500px] md:flex-col md:gap-[0px] md:pl-[140px] md:pt-[700px] md:box-border">
        <div className="relative w-[26px] h-[13px]" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-3xs [background:linear-gradient(180deg,_#000,_#100e0e)] shadow-[0px_4px_30px_#000] w-[157px] h-[27px] overflow-hidden shrink-0 md:flex"
          onClick={onFrameButtonClick}
        >
          <b className="absolute top-[3px] left-[32px] text-[16px] font-inika text-white text-center">
            View Casino
          </b>
        </button>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1153px] left-[0px] w-[1125px] flex flex-row items-center justify-end gap-[844px] z-[6] text-7xl lg:w-[1000px] md:hidden">
        <div className="relative w-[31px] h-[67px] overflow-hidden shrink-0" />
        <div
          className="relative rounded-xl bg-gray w-[835px] h-[1072px] overflow-hidden shrink-0 [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0]"
          data-animate-on-scroll
        >
          <div className="absolute top-[75px] left-[33px] rounded-3xs w-[769px] h-[65px] overflow-hidden">
            <div className="absolute top-[14px] left-[16px]">Game</div>
            <div className="absolute top-[14px] left-[663px]">Payout</div>
          </div>
          <div className="absolute top-[140px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[14px] left-[23px]">Million Vegads</b>
            <b className="absolute top-[14px] left-[490px]">0.000004394 BTC</b>
            <img
              className="absolute top-[12px] left-[717px] w-10 h-10 object-cover"
              alt=""
              src="/image-121@2x.png"
            />
          </div>
          <div className="absolute top-[316px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[14px] left-[13px]">European Roulette</b>
            <b className="absolute top-[12px] left-[515px]">0.0035594 BTC</b>
            <img
              className="absolute top-[12px] left-[717px] w-10 h-10 object-cover"
              alt=""
              src="/image-121@2x.png"
            />
          </div>
          <div className="absolute top-[580px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[14px] left-[17px]">Le Banditz</b>
            <b className="absolute top-[14px] left-[499px]">0.00039527 BTC</b>
            <img
              className="absolute top-[12px] left-[717px] w-10 h-10 object-cover"
              alt=""
              src="/image-121@2x.png"
            />
          </div>
          <div className="absolute top-[668px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[12px] left-[17px]">Lord of the Ocean</b>
            <b className="absolute top-[14px] left-[550px]">0.0977 BTC</b>
            <img
              className="absolute top-[12px] left-[717px] w-10 h-10 object-cover"
              alt=""
              src="/image-121@2x.png"
            />
          </div>
          <div className="absolute top-[756px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[12px] left-[21px]">Crystal Catcher</b>
            <b className="absolute top-[12px] left-[533px]">103.56 USDT</b>
            <img
              className="absolute top-[10px] left-[711px] w-10 h-10 object-cover"
              alt=""
              src="/image-151@2x.png"
            />
          </div>
          <div className="absolute top-[932px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[12px] left-[21px]">Instant Roulette</b>
            <b className="absolute top-[12px] left-[538px]">20.00 USDT</b>
            <img
              className="absolute top-[10px] left-[711px] w-10 h-10 object-cover"
              alt=""
              src="/image-151@2x.png"
            />
          </div>
          <div className="absolute top-[404px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[12px] left-[20px]">Blood Suckers</b>
            <b className="absolute top-[12px] left-[563px]">30.4 USDT</b>
            <img
              className="absolute top-[10px] left-[711px] w-10 h-10 object-cover"
              alt=""
              src="/image-151@2x.png"
            />
          </div>
          <div className="absolute top-[228px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[14px] left-[21px]">Dead or Alive 2</b>
            <b className="absolute top-[14px] left-[539px]">0.32434 ETH</b>
            <div className="absolute top-[2px] left-[710px] w-[50px] h-[50px]">
              <img
                className="absolute top-[0px] left-[0px] w-[50px] h-[50px] object-cover"
                alt=""
                src="/image-131@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[492px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[14px] left-[21px]">Candi Blitz</b>
            <b className="absolute top-[14px] left-[521px]">0.024573 ETH</b>
            <div className="absolute top-[2px] left-[710px] w-[50px] h-[50px]">
              <img
                className="absolute top-[0px] left-[0px] w-[50px] h-[50px] object-cover"
                alt=""
                src="/image-131@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[844px] left-[33px] rounded-3xs bg-black w-[769px] h-[65px] overflow-hidden">
            <b className="absolute top-[14px] left-[24px]">PLINKO</b>
            <b className="absolute top-[14px] left-[528px]">0.34663 ETH</b>
            <div className="absolute top-[2px] left-[710px] w-[50px] h-[50px]">
              <img
                className="absolute top-[0px] left-[0px] w-[50px] h-[50px] object-cover"
                alt=""
                src="/image-131@2x.png"
              />
            </div>
          </div>
          <b className="absolute top-[37px] left-[368px] text-lime">All Bets</b>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2658px] left-[17px] rounded-8xs flex flex-row items-center justify-start gap-[7px] z-[7] text-sm text-black font-inika lg:pb-0 lg:box-border md:pt-[110px] md:box-border">
        <img
          className="relative rounded-21xl w-5 h-5 object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <div className="relative">Copy Right</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[2570px] left-[0px] flex flex-row items-center justify-start z-[8] md:pt-[140px] md:box-border">
        <div className="relative w-[5px] h-2.5 overflow-hidden shrink-0" />
        <div className="rounded-3xs [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(1,_255,_255,_0))] flex flex-row items-start justify-start gap-[50px] md:gap-[20px] md:pt-0 md:box-border">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[58px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        </div>
        <Header />
      </div>
    </div>
  );
};

export default CryptoSpin;
