import { useEffect } from "react";
import Header1 from "../components/header1";

const Casino = () => {
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
  return (
    <div className="relative bg-darkorchid w-full h-[3337px] overflow-hidden flex flex-row items-start justify-start py-2.5 pr-0 pl-2.5 box-border gap-[10px] text-center text-xl text-white font-hanuman md:h-[5650px]">
      <div className="my-0 mx-[!important] absolute top-[137px] left-[0px] w-[308px] flex flex-row items-start justify-end gap-[255px] z-[1] lg:w-[130px] lg:gap-[100px] md:w-[110px]">
        <div className="relative w-px h-[11px] overflow-hidden shrink-0" />
        <div className="relative font-black inline-block w-[117px] h-[22px] shrink-0">
          Featured
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[503px] left-[0px] w-[308px] flex flex-row items-start justify-end gap-[255px] z-[2] lg:w-[140px] md:pt-[550px] md:pr-5 md:box-border">
        <div className="relative w-px h-[11px] overflow-hidden shrink-0" />
        <div className="relative font-black inline-block w-[117px] h-[22px] shrink-0">
          Top Picks
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[893px] left-[0px] w-[308px] flex flex-row items-start justify-end gap-[255px] z-[3] lg:w-[130px] lg:gap-[150px] lg:pr-0 lg:box-border md:gap-[130px] md:pt-[1050px] md:pr-5 md:box-border">
        <div className="relative w-px h-[11px] overflow-hidden shrink-0" />
        <div className="relative font-black inline-block w-[117px] h-[22px] shrink-0">
          Smarsh
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1283px] left-[0px] w-[317px] flex flex-row items-start justify-end gap-[255px] z-[4] lg:w-[150px] md:w-[130px] md:pt-[1550px] md:box-border">
        <div className="relative w-px h-[11px] overflow-hidden shrink-0" />
        <div className="relative font-black inline-block w-[117px] h-[22px] shrink-0">
          Megaways
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1663px] left-[5px] w-[317px] flex flex-row items-start justify-end gap-[255px] z-[5] lg:w-[150px] md:pt-[2100px] md:pr-5 md:box-border">
        <div className="relative w-px h-[11px] overflow-hidden shrink-0" />
        <div className="relative font-black inline-block w-[117px] h-[22px] shrink-0">
          Bones buy
        </div>
      </div>
      <div
        className="my-0 mx-[!important] absolute top-[184px] left-[5px] w-[1483px] flex flex-row items-start justify-center gap-[39px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] z-[6] text-mini lg:w-[1150px] md:flex-col md:pl-0 md:box-border"
        data-animate-on-scroll
      >
        <div className="relative w-[419px] h-[215px] text-xl">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-267@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[151px] left-[36px] font-black inline-block w-[117px] h-[22px]">
              Chaos crew
            </div>
          </div>
          <div className="absolute top-[0px] left-[229px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-268@3x.png')] bg-cover bg-no-repeat bg-[top] text-mini">
            <div className="absolute top-[160px] left-[42px] font-black inline-block w-[117px] h-[22px]">
              Fish and nudge
            </div>
          </div>
        </div>
        <div className="relative w-[419px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-269@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[164px] left-[39px] font-black inline-block w-[106px] h-[22px]">
              Zeus Smash
            </div>
          </div>
          <div className="absolute top-[0px] left-[229px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-270@3x.png')] bg-cover bg-no-repeat bg-[top] text-left">
            <div className="absolute top-[163px] left-[49px] font-black inline-block w-[91px] h-[22px]">
              King Carrot
            </div>
          </div>
        </div>
        <div className="relative rounded-3xs w-[190px] h-[215px] overflow-hidden shrink-0 bg-[url('/frame-271@3x.png')] bg-cover bg-no-repeat bg-[top] text-left">
          <div className="absolute top-[166px] left-[23px] font-black inline-block w-[154px] h-[22px]">
            Gemstone Guadiance
          </div>
        </div>
      </div>
      <div
        className="my-0 mx-[!important] absolute top-[550px] left-[5px] w-[1483px] flex flex-row items-start justify-center gap-[39px] [&.animate]:animate-[1s_linear_0s_1_normal_forwards_fade-in] opacity-[0] z-[7] text-mini lg:pr-[330px] lg:box-border md:flex-col md:pt-[550px] md:box-border"
        data-animate-on-scroll
      >
        <div className="relative w-[419px] h-[215px] text-xl">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-2671@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[157px] left-[36px] font-black inline-block w-[117px] h-[58px]">
              <p className="m-0">Sizzling</p>
              <p className="m-0">Hot Deluxe</p>
            </div>
          </div>
          <div className="absolute top-[0px] left-[229px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-2681@3x.png')] bg-cover bg-no-repeat bg-[top] text-mini">
            <div className="absolute top-[160px] left-[42px] font-black inline-block w-[117px] h-[22px]">
              Sugar Rush
            </div>
          </div>
        </div>
        <div className="relative w-[419px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-2691@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[164px] left-[39px] font-black inline-block w-[106px] h-[22px]">
              Temple of Turment
            </div>
          </div>
          <div className="absolute top-[0px] left-[229px] rounded-3xs w-[190px] h-[215px] overflow-hidden bg-[url('/frame-2701@3x.png')] bg-cover bg-no-repeat bg-[top] text-left">
            <div className="absolute top-[163px] left-[49px] font-black inline-block w-[91px] h-[22px]">
              Book of RA
            </div>
          </div>
        </div>
        <div className="relative rounded-3xs w-[190px] h-[215px] overflow-hidden shrink-0 bg-[url('/frame-2711@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[166px] left-[55px] font-black inline-block w-[79px] h-[22px]">
            Mines
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1955px] left-[0px] w-[506px] hidden flex-row items-start justify-end gap-[418px] z-[8] text-mini md:flex md:gap-[0px] md:pt-[2700px] md:pr-24 md:box-border">
        <div className="flex flex-row items-center justify-start">
          <div className="relative w-[100px] h-[100px] overflow-hidden shrink-0" />
        </div>
        <div className="relative rounded-xl bg-gray w-[394px] h-[699px] overflow-hidden shrink-0">
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
      <div className="my-0 mx-[!important] absolute top-[2017px] left-[0px] w-[1125px] flex flex-row items-center justify-end gap-[844px] z-[9] text-7xl lg:w-[1000px] md:hidden">
        <div className="relative w-[31px] h-[67px] overflow-hidden shrink-0" />
        <div className="relative rounded-xl bg-gray w-[835px] h-[1072px] overflow-hidden shrink-0">
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
      <div className="my-0 mx-[!important] absolute top-[3206px] left-[0px] flex flex-row items-center justify-start z-[10] md:flex md:w-0 md:pt-[2300px] md:box-border">
        <div className="relative w-[5px] h-2.5 overflow-hidden shrink-0" />
        <div className="rounded-3xs [background:linear-gradient(90deg,_rgba(255,_255,_255,_0),_rgba(1,_255,_255,_0))] flex flex-row items-start justify-start gap-[50px] md:gap-[20px] md:pt-0 md:box-border">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[58px] bg-[url('/twitterx@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/telegramapp@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/youtube@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[60px] h-[60px] bg-[url('/discord@2x.png')] bg-cover bg-no-repeat bg-[top] md:w-10 md:h-10" />
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[3288px] left-[5px] rounded-8xs flex flex-row items-center justify-start gap-[7px] z-[11] text-sm text-black font-inika lg:pb-0 lg:box-border md:pt-[2290px] md:box-border">
        <img
          className="relative rounded-21xl w-5 h-5 object-cover"
          alt=""
          src="/circled-c@2x.png"
        />
        <div className="relative">Copy Right</div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[940px] left-[5px] w-[1483px] flex flex-row items-start justify-center gap-[39px] z-[12] lg:w-[1130px] md:flex-col md:pt-[1050px] md:box-border">
        <div className="relative w-[413px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[189px] h-[215px] overflow-hidden bg-[url('/frame-477@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[156px] left-[37px] font-black">
              HelicopterX
            </div>
          </div>
          <div className="absolute top-[0px] left-[228px] rounded-3xs w-[189px] h-[215px] overflow-hidden bg-[url('/frame-478@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[156px] left-[29px] font-black">
              Dark Fantacy
            </div>
          </div>
        </div>
        <div className="relative w-[403px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[184px] h-[215px] overflow-hidden bg-[url('/frame-479@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[156px] left-[17px] font-black">
              Immortal desire
            </div>
          </div>
          <div className="absolute top-[0px] left-[223px] rounded-3xs w-[184px] h-[215px] overflow-hidden bg-[url('/frame-480@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[156px] left-[28px] font-black">
              Happy honey
            </div>
          </div>
        </div>
        <div className="relative rounded-3xs w-[188px] h-[215px] overflow-hidden shrink-0 bg-[url('/frame-481@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[156px] left-[8px] font-black">
            boom the bufoom
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1330px] left-[14px] w-[1474px] flex flex-row items-start justify-center gap-[39px] z-[13] lg:w-[1130px] md:w-[1000px] md:flex-col md:items-start md:justify-end md:pl-0 md:pt-[1550px] md:pr-0 md:box-border">
        <div className="relative w-[413px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[189px] h-[215px] overflow-hidden bg-[url('/frame-4771@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[143px] left-[24.5px] font-black inline-block w-[139px]">
              The Dog house
            </div>
          </div>
          <div className="absolute top-[0px] left-[228px] rounded-3xs w-[189px] h-[215px] overflow-hidden bg-[url('/frame-4781@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[143px] left-[19.5px] font-black inline-block w-[149px]">
              Duel of the dead
            </div>
          </div>
        </div>
        <div className="relative w-[403px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[184px] h-[215px] overflow-hidden bg-[url('/frame-4791@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[140px] left-[42.5px] font-black inline-block w-[99px]">
              Rocket Blast
            </div>
          </div>
          <div className="absolute top-[0px] left-[223px] rounded-3xs w-[184px] h-[215px] overflow-hidden bg-[url('/frame-4801@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[156px] left-[25px] font-black">
              Hunters Glory
            </div>
          </div>
        </div>
        <div className="relative rounded-3xs w-[188px] h-[215px] overflow-hidden shrink-0 bg-[url('/frame-4811@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[143px] left-[17.5px] font-black inline-block w-[153px]">
            Wild Wild RIches
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[1710px] left-[5px] w-[1483px] flex flex-row items-start justify-center gap-[39px] z-[14] lg:w-[1130px] md:flex-col md:pt-[2100px] md:box-border">
        <div className="relative w-[413px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[189px] h-[215px] overflow-hidden bg-[url('/frame-4772@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[143px] left-[24.5px] font-black inline-block w-[139px]">
              Fubky time
            </div>
          </div>
          <div className="absolute top-[0px] left-[228px] rounded-3xs w-[189px] h-[215px] overflow-hidden bg-[url('/frame-4782@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[143px] left-[19.5px] font-black inline-block w-[149px]">
              Monopoly
            </div>
          </div>
        </div>
        <div className="relative w-[403px] h-[215px]">
          <div className="absolute top-[0px] left-[0px] rounded-3xs w-[184px] h-[215px] overflow-hidden bg-[url('/frame-4792@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[140px] left-[42.5px] font-black inline-block w-[99px]">
              Crazy coinflip
            </div>
          </div>
          <div className="absolute top-[0px] left-[223px] rounded-3xs w-[184px] h-[215px] overflow-hidden bg-[url('/frame-4802@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[156px] left-[44px] font-black">
              Monopoly
            </div>
          </div>
        </div>
        <div className="relative rounded-3xs w-[188px] h-[215px] overflow-hidden shrink-0 bg-[url('/frame-4812@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[143px] left-[17.5px] font-black inline-block w-[153px]">
            Forge of olympus
          </div>
          <Header1 />
        </div>
      </div>
    </div>
  );
};

export default Casino;
